from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, Git!"\n\nif __name__ == "__main__":\n    app.run()
