# Assignment 08 - Kubernetes con Minikube, ArgoCD y Traefik

## Descripción

En esta actividad se crea un clúster local de Kubernetes usando Minikube.  
Dentro del clúster se instalarán Traefik, ArgoCD y una aplicación web dockerizada.

## Tecnologías usadas

- Docker Desktop
- Kubernetes
- Minikube
- kubectl
- Traefik
- ArgoCD
- YAML manifests
- DNS local mediante archivo hosts

## Comandos ejecutados

### Verificar herramientas instaladas

```bash
docker --version
kubectl version --client
minikube version