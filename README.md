# LinuxBox

>An online web terminal with screen sharing capabilities allowing a trainer to host a live training session with remote students.


The LinuxBox is a web based terminal with screen sharing capabilities. The entire app eco-system heavily relys on WebRTC to deliver real time communication to end users. But as this writing the screen sharing feature that allows you to share your terminal tab in your browser only works with chrome at the moment.
So you definately have to use chrome for this app to work.

The app is running a micro-services architecture where all services have a dedicated container within which the run.
These containers are in turn connected by a virtual network creating through the docker compose tool. This also allows the app to run in multiple containers, but have shared resources.

## INSTALLATION

To run this build, you need to have docker and docker-compose installed on your machine:

### DOCKER FOR CentOS(RHEL)

Enable the epel repos:

```bash
sudo yum install epel-release
```

Then update your repositories with:

```bash
sudo yum update
```

And now you can install docker and docker-compose as:

```bash
sudo yum install docker docker-compose
```

### DOCKER FOR UBUNTU(DEBIAN)

For most debian based opearting systems, docker is part of the default repository.
If its not there, add it to the repositories with the following commands

Create the file in the apt sources directory:

```bash
sudo touch /etc/apt/sources.list.d/docker.list
```
Then add the debian link to docker sources.

```bash
echo "deb [arcch=amd64] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

Then update your repositories with:

```bash
sudo apt update
```

At this point you can now install docker/docker-compose

```bash
sudo apt install docker docker-compose
```

### SPINNING UP LinuxBox

Go to the installation directory, then execute.

```bash
git clone https://github.com/living-opensource-zambia/linuxbox.git
```
After the cloning is done, go to the linuxbox directory, then execute:

```bash
cd linuxbox
```

Now you are all set to build and run the containers with:

```bash
docker-compose up -d
```

The above command will build and run your docker containers defined in the [docker-compose.yml](docker-compose.yml) file

## LICENSE

This is an open source project released under the [MIT licence](LICENSE.md), meaning anyone with access to this code can literally do whatever pleases them with the code.
The author(s) of this source code, do not in any way assume any lose and/or damanage that may arise from the use or acquisition of this software.

## CONTRIBUTING

If you have any feature request and/or want to add a few whistles and bells, feel free to contact us.
To get more information about contributing, please [click here](CONTRIBUTING.md)

#  Happy Coding ...
### Thanks :)
### Living Open Source Foundation Zambia