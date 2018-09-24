from urllib import request


# Get the latest version number of Chrome WebDriver
latest_release = 'https://chromedriver.storage.googleapis.com/LATEST_RELEASE'

data = request.urlopen(latest_release)
version = [line.decode('UTF-8') for line in data if line][0]


# List of available builds
builds = [
    "chromedriver_linux64.zip",
    "chromedriver_mac64.zip",
    "chromedriver_win32.zip",
]
build_base_url = "https://chromedriver.storage.googleapis.com"


# Download every build
assets_dir = "./assets/chromedriver"

for build in builds:
    request.urlretrieve(
        "{0}/{1}/{2}".format(build_base_url, version, build),
        "{0}/{1}".format(assets_dir, build)
    )
