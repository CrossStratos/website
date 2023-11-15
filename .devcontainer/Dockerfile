FROM mcr.microsoft.com/devcontainers/go:1-1.21-bullseye

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install \
    ca-certificates \
    curl \
    gnupg

# Add Docker's official GPG key:
RUN install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg \
    | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
RUN echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
    "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
    tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install docker cli.
RUN sudo apt-get update && apt-get install -y \
    docker-ce-cli

# nvm environment variables
ENV NVM_DIR=/usr/local/share/nvm
RUN mkdir -p $NVM_DIR && \ 
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash 

ARG NODE_VERSION=21.2.0
# install node and npm
RUN . $NVM_DIR/nvm.sh &&\
    nvm install $NODE_VERSION && \
    corepack enable 
    
ARG NEXTJS_VERSION=14.0.2
# install next and react dependencies.
RUN yarn add next@$NEXTJS_VERSION \
    react@latest \
    react-dom@latest

# Snippet that should be added into rc / profiles
RUN echo """ \ 
    export NVM_DIR="${NVM_DIR}" \
    [ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh" \
    [ -s "\$NVM_DIR/bash_completion" ] && . "\$NVM_DIR/bash_completion")"

