run:
	docker-compose up -d

run-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

down:
	docker-compose down