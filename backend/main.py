from flask import Flask, request, jsonify

app = Flask(__name__)

def get_response(message):
    msg = message.lower()
    if any(word in msg for word in ['ordine', 'status', 'spedizione', 'traccia']):
        return "Il tuo ordine #12345 è in spedizione. Prevista consegna il 8 gennaio. Traccia qui: https://tracking.example.com/12345"
    if any(word in msg for word in ['reso', 'restituire', 'rimborso']):
        return "Per il reso, segui questo link: https://tuosito.com/reso. Rimborso entro 7 giorni dall'arrivo del pacco."
    if any(word in msg for word in ['consiglio', 'raccomanda', 'prodotto', 'suggerisci']):
        return "Ti consiglio il nostro best-seller: Widget Pro a €79 (sconto 20% oggi!). Aggiungilo al carrello?"
    return "Non ho capito bene. Puoi riformulare o preferisci parlare con un operatore umano?"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    response = get_response(user_message)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
