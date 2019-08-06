# Non-math guide to cryptography

*THIS DOCUMENT IS INCOMPLETE*. I'm posting it here so that people can comment on a work-in-progress.
It's 25k words long, with about 10k more words to go. I started it as a quick chapter in a book and it's
grown to be book length. I'd love to hear your feedback, which you can do by posting comments
here on GitHub, or better yet, by tweeting questions to me @ErrataRob.

This is a non-math, but still technical, guide to cryptography. It's intended for users
of command-line tools, infosec professionals, and programmers. 
It explores how SSL and SSH connections are established with encryption
and public-keys. It describes how to use command-line tools, like `ssh`, `openssl`, and `gpg`.

This isn't a guide for non-technical users. It assumes some familiarity with the command-line,
and that you regularly use `ssh` to connect to remote command-lines. At the same time,
it avoids the math. We take it as given that these algorithms work without exploring why
they work.

