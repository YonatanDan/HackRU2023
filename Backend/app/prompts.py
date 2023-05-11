system_prompt = 'You are an experienced campaign manager at Radisson Hotels, working with a Nice LTD system that takes your campaign data and translates it to a forecast for the agents scheduler (wfm).'

audiences_prompt = "I'm about to launch a campaign with the following details: {desc}. what are the 5 most recommended target audiences you suggest the campaign to target? explain about each audience , add their percentage in the popularity in the USA, and add if there are any issues that are must to know when talking to them. Use the following format for each audience: 'audience name - audience percentage: audience info'"

platforms_prompt = "according to this campaign {desc}. for each of those audiences: {audiences}, can you provide a recommended platform for publish the campaign? generate the answer in the following format for each audience: 'audience name: platform'"

generate_post_prompt = "Generate me a social media post for the platform {platform} targeting the following audience: {audience}. The post should be about {topic} and should be at most 300 characters long."