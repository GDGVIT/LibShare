<p align="center">
<a href="https://dscvit.com">
	<img width="400" src="https://user-images.githubusercontent.com/56252312/159312411-58410727-3933-4224-b43e-4e9b627838a3.png#gh-light-mode-only" alt="GDSC VIT"/>
</a>
	<h2 align="center">LibShare</h2>
	<h4 align="center">An application for distribution of packages on a local network. No need of internet, either.<h4>
</p>

---
[![Join Us](https://img.shields.io/badge/Join%20Us-Developer%20Student%20Clubs-red)](https://dsc.community.dev/vellore-institute-of-technology/)
[![Discord Chat](https://img.shields.io/discord/760928671698649098.svg)](https://discord.gg/498KVdSKWR)

[![DOCS](https://img.shields.io/badge/Documentation-see%20docs-green?style=flat-square&logo=appveyor)](INSERT_LINK_FOR_DOCS_HERE) 
  [![UI ](https://img.shields.io/badge/User%20Interface-Link%20to%20UI-orange?style=flat-square&logo=appveyor)](INSERT_UI_LINK_HERE)


## Features
- Distribute packages for development (or otherwise)
- Easy setup, without need of internet
- Can be useful in hackathons or private workspaces

<br>


## Running
Place the libraries/packages you want to distribute in a folder named libs in the backend directory. Each package needs to be in a directory with the name of the language it is for. For example, bs4 goes in libs/python/
```bash
cd backend
./libshare.sh
```
This should start the backend server on port 8080 (can be changed otherwise from libshare.sh file or main.py file)

For starting up the frontend, we need to start our react app which is in the frontend directory.
```bash
cd frontend
npm run dev
```
This should have your frontend up and running. For others on the same local network to be able to access that, you can have them visit: http://your_local_ip_address
## Contributors

<table>
	<tr align="center">
		<td>
		Sankhayan Bhattacharjee
		<p align="center">
			<img src = "https://avatars.githubusercontent.com/u/74904820?v=4" width="150" height="150" alt="Sankhayan Bhattacharjee">
		</p>
			<p align="center">
				<a href = "https://github.com/lioncat2002">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
				<a href = "https://www.linkedin.com/in/sankhayan-bhattacharjee-996336220/">
					<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
				</a>
			</p>
		</td>
	</tr>
	<tr align="center">
		<td>
		Siddharth Nikhil
		<p align="center">
			<img src = "https://avatars.githubusercontent.com/u/51060067?v=4" width="150" height="150" alt="Siddharth Nikhil">
		</p>
			<p align="center">
				<a href = "https://github.com/siddnikh">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
				<a href = "https://www.linkedin.com/in/siddnikh/">
					<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
				</a>
			</p>
		</td>
	</tr>
</table>

<p align="center">
	Made with ❤ by <a href="https://dscvit.com">GDSC-VIT</a>
</p>
