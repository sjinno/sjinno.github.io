+++
title = "pgAdmin4 on Fedora 33"
date = 2021-04-15
[taxonomies]
tags = ["postgresql", "pgadmin", "setup", "tutorial", "fedora"]
+++

# Useful links:

- [PostgreSQL Server Setup & Monitor](https://www.youtube.com/watch?v=jDQjRHPRcgM&list=PL061tjwVHN1gJIfXCHk4jc9aRacY0D9vR&index=1&t=581s)

- [How To Install PostgreSQL 12 on Fedora 33/32/31/30](https://computingforgeeks.com/how-to-install-postgresql-12-on-fedora/)

- [Install pgAdmin 4 on CentOS 7 & Fedora 33/32/31/30](https://computingforgeeks.com/how-to-install-pgadmin-on-centos-fedora/)

# Useful commands:

```bash
sudo dnf search postgresql12

dnf list installed | grep postgresql12\*

systemctl status httpd
systemctl status postgresql-12


systemctl start httpd
systemctl start postgresql-12

systemctl stop httpd
systemctl stop postgresql-12

systemctl restart httpd
systemctl restart postgresql-12

man firewall-cmd

sudo netstat -tupln
```

<br />

# Step 1: Install PostgreSQL

1.  First of all, update the system packages:

    ```bash
    sudo dnf update -y && reboot
    ```

2.  And then add the PostgreSQL yum repository:

    **Download link:** <https://www.postgresql.org/download/linux/redhat/>

    ```bash
    # Install the repository RPM:
    sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-33-x86_64/ pgdg-fedora-repo-latest.noarch.rpm

    # Install PostgreSQL:
    sudo dnf install -y postgresql12-server postgresql12

    # Optionally (recommended) initialize the database and enable automatic start:
    sudo /usr/pgsql-12/bin/postgresql-12-setup initdb
    sudo systemctl enable postgresql-12
    sudo systemctl start postgresql-12
    ```

3.  Firewall setting:

    ```bash
    sudo firewall-cmd --add-port=5432/tcp --permanent
    sudo firewall-cmd --reload
    ```

4.

# Step 2: Set up pgAdmin4
