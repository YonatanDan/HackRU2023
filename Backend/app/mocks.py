import random

def get_random_forecast_data():
    langs = [
        'Arabic',
        'French',
        'Russian',
        'Hebrew',
    ]

    skills = [
        'Customer Service Agent',
        'Payment Processing Agent',
        'Refunds and Adjustments Agent',
        'Double Booking or Overcharging Agent',
    ]

    l = [[2, 2, 2, 9, 9, 9, 9, 7, 7],
        [2, 2, 2, 8, 10, 10, 9, 7, 6],
        [1, 1, 1, 7, 10, 9, 7, 6, 3],
        [2, 2, 2, 8, 10, 10, 10, 7, 7],
        [1, 1, 3, 7, 9, 8, 7, 4, 1],
        [1, 1, 2, 6, 9, 10, 10, 8, 6],
        [1, 1, 1, 8, 9, 9, 9, 6, 3],
        [2, 2, 2, 7, 10, 10, 9, 8, 8],
        [1, 1, 1, 7, 10, 8, 6, 3, 2],
        [2, 2, 2, 9, 9, 10, 8, 6, 4],
        [1, 1, 1, 7, 9, 9, 9, 8, 5],
        [2, 2, 2, 10, 10, 9, 9, 7, 7],
        [1, 1, 1, 8, 10, 8, 5, 4, 1],
        [1, 1, 3, 8, 10, 9, 7, 4, 1],
        [1, 1, 1, 8, 10, 10, 8, 5, 2],
        [2, 2, 2, 9, 10, 10, 8, 7, 6],
        [1, 1, 1, 8, 9, 9, 8, 6, 2],
        [2, 2, 2, 8, 10, 10, 9, 7, 7],
        [1, 1, 1, 7, 10, 8, 6, 3, 2],
        [2, 2, 2, 9, 9, 10, 8, 6, 4]]

    skill = random.choice(skills)
    langauge = random.choice(langs)
    random_calls_distribution = random.choice(l)

    return skill, langauge, random_calls_distribution