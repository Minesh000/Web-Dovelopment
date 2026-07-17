from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        'message': 'Hello from the backend',
        'items': [1, 2, 3, 4, 5]
    }
    # return jsonify(data)
    return data

if __name__ == '__main__':
    app.run(debug=True)