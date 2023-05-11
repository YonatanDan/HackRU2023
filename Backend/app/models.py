import datetime
import uuid

class Campaign:
    def __init__(self, name, start_date=None, end_date=None,
                 should_consider_history=False, previous_insights=None, skills=None):
        self.__uuid = str(uuid.uuid4())
        self.__name = name

        # Convert dates to datetime objects
        if start_date is None:
            self.__start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d')

        if end_date is None:
            self.__end_date = datetime.datetime.strptime(end_date, '%Y-%m-%d')
        self.__should_consider_history = should_consider_history
        self.__previous_insights = previous_insights
        self.__skills = skills

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

    @property
    def uuid(self):
        return self.__uuid

    def __repr__(self):
        return f'<Campaign {self.name}>'