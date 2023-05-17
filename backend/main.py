from fastapi import FastAPI
from scrapper import reader

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/data/")
def read_data():
    d = {}
    data = reader.scrape("http://localhost:8000/")
    for i in data:
        if not i.endswith("/"):
            l = i.split("/")
            if l[-2] in d.keys():
                d[l[-2]].append(l[-1])
            else:
                d[l[-2]] = [
                    l[-1],
                ]

    return {"data": d}
