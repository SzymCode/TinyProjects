email = input("Enter Your Email: ")
username = email[:email.index("@")]
domain = email[email.index("@") + 1:]
sliced_email_username = f"Your user name is '{username}' and your domain is '{domain}'"
print(format)
