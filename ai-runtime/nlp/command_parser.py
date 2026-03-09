class CommandParser:
    def parse(self, text):
        return {"tokens": text.split(), "length": len(text)}
