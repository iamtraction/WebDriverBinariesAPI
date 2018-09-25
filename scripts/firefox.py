#!/usr/bin/env python

import json
import urllib as request


# Get the latest build name & download links of Firefox WebDriver
base_url = 'https://api.github.com/repos/'
latest_release_path = '{0}mozilla/geckodriver/releases/latest'.format(base_url)

data = request.urlopen(latest_release_path)
data = json.load(data)

builds = data['assets']


# Download every build
assets_dir = "./assets/geckodriver"

for build in builds:
    request.urlretrieve(
        build['browser_download_url'],
        "{0}/{1}".format(assets_dir, build['name'])
    )
