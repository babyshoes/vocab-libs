FROM python:3.7.0-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN apk update && \
 apk add postgresql-libs && \
 apk add --virtual .build-deps gcc musl-dev postgresql-dev && \
 apk add --no-cache bash && \
 python3 -m pip install -r requirements.txt --no-cache-dir && \
 apk --purge del .build-deps

CMD ["/usr/src/app/entrypoint.sh"]
