from flask import Blueprint, jsonify, request
from concurrent.futures import ThreadPoolExecutor
import openai

from .models import Campaign
from .config import ProductionConfig


nicer_api = Blueprint('nicer_api', __name__)

executor = ThreadPoolExecutor(10)
results = {}
MODEL = 'gpt-3.5-turbo'


def openai_get_campaign_insights(campaign : Campaign, api_key: str):
    openai.api_key = api_key

    completion = openai.ChatCompletion.create(
        model=MODEL,
        messages=[{"role": "user", "content": "Hello world"}]
    )

    return {
        'chat_response': completion.choices[0].message.content
    }


def _store_result(campaign: Campaign, api_key: str):
    result = openai_get_campaign_insights(campaign, api_key)
    results[campaign.uuid] = result


@nicer_api.route('/')
def hello():
    return jsonify({'message': 'Hello, World!'})


@nicer_api.route('/campaign/generate', methods=['POST'])
def generate_campaign():
    api_key = ProductionConfig.OPENAI_API_KEY
    data = request.get_json()

    if not all(field in data for field in ['name', 'description']):
        return jsonify({'message': 'Invalid request parameters!'}), 400

    campaign = Campaign(data['name'], data['description'])
    executor.submit(_store_result, campaign, api_key)

    return jsonify({
        'uuid': campaign.uuid,
        'message': 'Campaign Generated Started',
        'api_key': api_key
    })


@nicer_api.route('/campaign/get/<campaign_id>', methods=['GET'])
def get_campaign(campaign_id):
    if campaign_id not in results:
        return jsonify({'message': 'Campaign not found!'}), 404

    result = results[campaign_id]
    del results[campaign_id]
    return jsonify(result)