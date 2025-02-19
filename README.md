## Introduction

This is a sample server to accompany the [ECS-Fargate Repository](https://github.com/nattiechan/ecs-fargate) that can be used to experience AWS deployment.

Many thanks to [Jiecheng Dong](https://github.com/jiedong111) and [Alexander Infante](https://github.com/Alexander-Infante) for their support and mentorship, and [Sabrina Goldfarb](https://github.com/sgoldfarb2) for making the AWS project possible.

## Usage guide

The server has the root (`/`) and `/pug` endpoint available for use.

### Running the server locally

The server is best run within a dockerized environment.

- If you have Docker desktop installed, ensure the software is running
- Clone the repository to your local environment
- In terminal, run:
  ```bash
  docker compose up -d test-server && docker compose exec test-server npm run dev
  ```
- Use Postman, Bruno or equivalent to test the server

Alternatively, this repository is equipped to utilize [VS Code Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) to open the code inside a dockerized environment. To do so:

- Open the project in a VS code
- Follow prompts to reopen folder to develop in a container
- In terminal, run `npm run dev` to start your server

### Running the server on AWS

See [deployment-guide.md](https://github.com/nattiechan/ecs-fargate/blob/main/docs/deployment-guide.md) in the ECS-Fargate repository.
