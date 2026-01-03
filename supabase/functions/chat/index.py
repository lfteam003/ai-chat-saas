from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs
import json

def chatbot_response(message: str) -> str:
    msg = message.lower()
    if any(word in msg for word in ['ordine', 'status', 'spedizione', 'dovè']):
        return "Il tuo ordine #12345 è in spedizione. Arrivo previsto: 5 gennaio. Traccia qui: [link]"
    elif any(word in msg for word in ['reso', 'restituire', 'rimborso']):
        return "Per un reso, segui questo link: [tuo-link-resi]. Rimborso entro 7 giorni."
    elif any(word in msg for word in ['consiglio', 'raccomanda', 'prodotto']):
        return "Basato sui tuoi acquisti, ti consiglio il Widget Pro a €49.99! (+20% sconto oggi)"
    else:
        return "Non ho capito bene. Puoi riformulare? O preferisci parlare con un operatore umano?"

def handle_request(path, method, body):
    if path == '/chat' and method == 'POST':
        data = json.loads(body)
        user_message = data.get('message', '')
        response = chatbot_response(user_message)
        return {
            "statusCode": 200,
            "body": json.dumps({"response": response})
        }
    else:
        return {
            "statusCode": 404,
            "body": json.dumps({"error": "Not found"})
        }

# Supabase Edge Function handler
def main(request):
    return handle_request(request['path'], request['method'], request.get('rawBody', '{}'))
