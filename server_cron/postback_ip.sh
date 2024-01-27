IP=$(curl -s https://api.ipify.org)
curl -X POST -H "Content-Type: application/json" -d '{"ip": "'"$IP"'"}' https://remote-ip-check.onrender.com/ip
