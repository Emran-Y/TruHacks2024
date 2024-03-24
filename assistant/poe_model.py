from poe_api_wrapper import AsyncPoeApi

TOKENS = {
    'b': "tQA9VCmyds2hmwNwW6zUwQ==",
    'lat': "LEJZ0gY2ljV87wfMJnlVpGSnulsp22ePbbNOJyofMQ=="
}

class PoeApiModel:
    def __init__(self):
        self.client = None

    async def create_client(self):
        self.client = await AsyncPoeApi(cookie=TOKENS).create()

    async def send_message(self, bot, message):
        responses = []
        async for chunk in self.client.send_message(bot=bot, message=message):
            responses.append(chunk["response"])
        return "".join(responses)