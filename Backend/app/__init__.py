from flask import Flask

def create_app():
    # create the Flask app instance
    app = Flask(__name__)

    # import the routes
    from .routes import hello_world

    # register the routes with the app
    app.register_blueprint(hello_world)

    return app
