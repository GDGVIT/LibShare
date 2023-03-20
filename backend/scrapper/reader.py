import requests
from bs4 import BeautifulSoup

# lists
urls = []


# function created
def scrape(site):
    # getting the request from url
    r = requests.get(site)

    # converting the text
    s = BeautifulSoup(r.text, "html.parser")
    ul = s.find("ul")
    if ul is None:
        return urls
    for i in s.find("ul").find_all("li"):
        href = i.find("a").attrs["href"]

        s = site + href

        if s not in urls:
            urls.append(s)
            scrape(s)
    return urls


# main function
if __name__ == "__main__":
    # website to be scrape
    site = "http://localhost:8000/"

    # calling function
    u = scrape(site)
    print(u)
