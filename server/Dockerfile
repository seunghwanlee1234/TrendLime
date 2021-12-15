# # ./Dockerfile 
FROM python:3.8-buster
WORKDIR /usr/src/app

# 파이썬 출력 버퍼 제거
ENV PYTHONUNBUFFERED 1

# net-tools, dnsutils 설치
#RUN apt install -y net-tools
#RUN apt install -y dnsutils
#RUN apt update -y 
#RUN apt -y install vim 
# docker 안에서 vim설치를 안하도록

## Install packages
RUN pip install django
COPY . /server
WORKDIR /server
# COPY requirements.txt /home/프로젝트명
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

EXPOSE 5000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:5000"]

