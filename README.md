# Julian Vasquez
# 202308005

## Diagrama de la infraestructura
  [Usuario] -->|http://localhost:8080| LB[Nginx Load Balancer]
  LB --> W1[web1 (Nginx) - server 1]
  LB --> W2[web2 (Nginx) - server 2]

## Comando para ejecutar 
docker compose up -d
## Comando para detener
docker compose down
## URL del balanceador
http://localhost:8080
## Prueba del Round Robin // basicamente un ciclo para ver los request
for i in {1..8}; do
  echo "---- Request $i ----"
  curl -s -H "Connection: close" http://localhost:8080 | grep -Eo "server [12]"
done
<img width="607" height="343" alt="image" src="https://github.com/user-attachments/assets/9c13b3d2-7858-4a79-a170-e25d32ddc42a" />
