+++
title = "pgAdmin4 on Fedora 33"
date = 2021-04-15
[taxonomies]
tags = ["postgresql", "pgadmin", "setup", "tutorial", "fedora"]
+++

# Useful links:

-   [PostgreSQL Server Setup & Monitor](https://www.youtube.com/watch?v=jDQjRHPRcgM&list=PL061tjwVHN1gJIfXCHk4jc9aRacY0D9vR&index=1&t=581s) (youtube)

-   [How To Install PostgreSQL 12 on Fedora 33/32/31/30](https://computingforgeeks.com/how-to-install-postgresql-12-on-fedora/)

-   [Install pgAdmin 4 on CentOS 7 & Fedora 33/32/31/30](https://computingforgeeks.com/how-to-install-pgadmin-on-centos-fedora/)

\

# Useful commands:

```bash
sudo dnf search postgresql12

dnf list installed | grep postgresql12

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

\
\

# Step 1: Install PostgreSQL

1.  First of all, update the system packages

    ```bash
    sudo dnf update -y && reboot
    ```

2.  Add the PostgreSQL yum repository

    **Download link:** <https://www.postgresql.org/download/linux/redhat/>

    ```bash
    # Install the repository RPM:
    sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-33-x86_64/ pgdg-fedora-repo-latest.noarch.rpm

    # Install PostgreSQL:
    sudo dnf install -y postgresql12-server postgresql12

    # Initialize the database and enable automatic start:
    sudo postgresql-12-setup initdb
    # If the above didn't work, then try the following:
    sudo /usr/pgsql-12/bin/postgresql-12-setup initdb

    # Enable postgres server to start on boot:
    sudo systemctl enable postgresql-12

    # Start postgres server:
    sudo systemctl start postgresql-12
    ```

3.  Firewall setting

    ```bash
    sudo firewall-cmd --add-port=5432/tcp --permanent
    sudo firewall-cmd --reload
    ```

4.  Edit `/var/lib/pgsql/12/data/postgresql.conf`

    Edit the line where it says `listen_addresses = '...'` to `listen_addresses = '*'` for remote access.

    Mine is just set to `listen_addresses = 'localhost'` or `listen_addresses = '127.0.0.1'` since I don't need to remotely access to the database right now.

5.  Notice that there is now `potgres` user with:

    ```bash
    more /etc//passwd | grep postgres

    # And then set the admin password with:
    sudo passwd postgres
    ```

    **IMPORTANT:** Try not to forget the password.

6.  Set PostgreSQL admin user’s password

    ```bash
    sudo su - postgres

    # After running the line below,
    # it should print out `ALTER ROLE` if successful.
    psql -d template1 -c "ALTER USER postgres WITH PASSWORD 'ReallyGoodPasswd';"
    ```

And that should be it for the installation of PostgreSQL!

\

# Step 2: Set up pgAdmin4

This one is fairly easier, so let's just do it :)

**Instruction link:** <https://www.pgadmin.org/download/pgadmin-4-rpm/>

1. Uninstall any pgAdmin repo packages that you may already have installed:

    ```bash
    sudo rpm -e pgadmin4-fedora-repo
    ```

2. Set up the repository:

    ```bash
    sudo rpm -i https://ftp.postgresql.org/pub/pgadmin/pgadmin4/yum/pgadmin4-fedora-repo-1-1.noarch.rpm
    ```

3. Search for package:

    ```bash
    sudo dnf search pgadmin4
    ```

4. Install the package:

    ```bash
    sudo dnf install pgadmin4.noarch
    ```

5. Finally, run the web setup script to configure the system to run in web mode:

    ```bash
    sudo /usr/pgadmin4/bin/setup-web.sh
    ```

That should be it for the installation of pgAdmin4, though I could be missing somthing. If that seems like the case, please go to [Install pgAdmin 4 on CentOS 7 & Fedora 33/32/31/30](https://computingforgeeks.com/how-to-install-pgadmin-on-centos-fedora/) and try to figure it out.

\

# Finally

1. You might have to open `/var/lib/pgsql/12/data/pg_hba.conf` with:

    ```bash
    sudo nano /var/lib/pgsql/12/data/pg_hba.conf
    ```

    And change `peer` and `ident` to `md5`.

    ```bash
    # TYPE  DATABASE        USER            ADDRESS                 METHOD

    # "local" is for Unix domain socket connections only
    local   all             all                                     md5
    # IPv4 local connections:
    host    all             all             127.0.0.1/32            md5
    ```

And...that really should be it?

\
\

## Optional:

_Let's create a test database!_

```bash
su - postgres
```

```bash
# Create a new test database:
createdb newtestdb
```

```
psql newtestdb

# List all the databases:
\l

CREATE TABLE employees (eid int, fname varchar, lname varchar);

INSERT INTO employees VALUES (1, 'Peter', 'Smith');

SELECT * FROM employees;
```

To exit `psql`, run

```
\q
```

And to exit `postgres user`, run

```
exit
```

Now you can also open up your pgAdmin4 by going to `localhost/pgadmin4` or maybe `127.0.0.1/pgadmin4` and you should be able to see the database created!

Though, if it's your first time ever opening up pgAdmin4, **_you will have to connect it to the postgres server._** So just simply follow the very last part of [Install pgAdmin 4 on CentOS 7 & Fedora 33/32/31/30](https://computingforgeeks.com/how-to-install-pgadmin-on-centos-fedora/), and you should be good to go.

Also, don't forget to:

```bash
systemctl start httpd
systemctl start postgresql-12
```

You can check if they're running with:

```bash
systemctl status httpd
systemctl status postgresql-12
```

I hope it helped!
