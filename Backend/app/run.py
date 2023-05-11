from app import create_app

# create the Flask app instance
app = create_app()

if __name__ == '__main__':
    # start the app
    app.run()
