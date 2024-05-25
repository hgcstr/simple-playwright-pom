# docker build -t playwright-tests .
#docker run --rm -it playwright-tests

FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Install Playwright browsers
RUN npx playwright install --with-deps

COPY . .

# # Set environment variables (optional, for demonstration purposes)
# ENV BASE_URL=http://your-base-url.com
# ENV EMAIL=testkjdssss8@mailinator.com
# ENV PASSWORD=1234567890

# Command to run your tests
CMD ["npx", "playwright", "test"]
