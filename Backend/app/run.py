from app import create_app
from .config import ProductionConfig

# create the Flask app instance
app = create_app()
app.config.from_object(ProductionConfig)


if __name__ == '__main__':
    # start the app
    # log the start of the app using the logger
    raise Exception('This is a test exception')
    app.run()
