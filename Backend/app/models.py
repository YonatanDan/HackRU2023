import datetime
from typing import List
import uuid

class Campaign:
    def __init__(self, name, start_date=None, end_date=None,
                 should_consider_history=False, previous_insights=None, skills=None):
        self.__uuid = str(uuid.uuid4())
        self.__name = name

        # Convert dates to datetime objects
        self.__start_date = start_date
        self.__end_date = end_date
        self.__should_consider_history = should_consider_history
        self.__previous_insights = previous_insights
        self.__skills: List[str] = skills

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

    def __repr__(self):
        return f'<Campaign {self.name}>'