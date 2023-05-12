import datetime
from typing import List
import uuid


class Audience:
    def __init__(self, name, percentage, info):
        self.__name = name
        self.__percentage = percentage
        self.__info = info
        self.__platform = None

    @property
    def name(self):
        return self.__name

    @property
    def percentage(self):
        return self.__percentage

    @property
    def info(self):
        return self.__info

    @property
    def platform(self):
        return self.__platform

    @platform.setter
    def platform(self, platform):
        self.__platform = platform


class Campaign:
    def __init__(self, name, start_date=None, end_date=None,
                 should_consider_history=False, previous_insights=None, skills=None,
                 description=''):
        self.__uuid = str(uuid.uuid4())
        self.__name = name

        # Convert dates to datetime objects
        self.__start_date = start_date
        self.__end_date = end_date
        self.__should_consider_history = should_consider_history
        self.__previous_insights = previous_insights
        self.__skills: List[str] = skills if skills else []
        self.__description = description
        self.__audiences: List[Audience] = []

    def get_fields(self):
        return [field for field in dir(self) if not field.startswith('__') and not callable(getattr(self, field))].remove('uuid')

    @property
    def name(self):
        return self.__name

    @property
    def start_date(self):
        return self.__start_date

    @property
    def end_date(self):
        return self.__end_date

    @property
    def should_consider_history(self):
        return self.__should_consider_history

    @property
    def previous_insights(self):
        return self.__previous_insights

    @property
    def skills(self):
        return self.__skills

    def skills_for_prompt(self):
        return ', '.join(self.skills)

    @property
    def uuid(self):
        return self.__uuid

    @property
    def description(self):
        return self.__description

    @property
    def audiences(self):
        return self.__audiences

    @audiences.setter
    def audiences(self, audiences):
        self.__audiences = audiences

    def __repr__(self):
        return f'<Campaign {self.name}>'
