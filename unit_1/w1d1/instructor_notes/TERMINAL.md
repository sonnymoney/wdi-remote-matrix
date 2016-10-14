![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Terminal<br>
Type: Lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page<br>
Topics: Intro to the Command Line<br>
<hr>

## Lesson Objectives


_After this lesson, students will be able to:_

- Explain why we use the Terminal
- Use the command line to navigate directories
- Change directories using both relative and absolute pathing
- Create directories and files
- Move and copy files and directories
- Delete files and directories


<hr>


# TERMINAL

- What is 'Terminal'

The most familiar analogy to Terminal for OSX users is the Finder. Finder lets us navigate the folders and files as they exist in the directory structure in our computer.

Finder has limitations

- Cannot create files without extra software / add-ons
- Cannot see hidden files, or system files, without hacking it a bit. 
- Cannot see programs or processes that are running on your computer. For that you need another piece of software like Activity Monitor.
- Cannot run scripts or generate folders / files. For that you need another piece of software like Automator.
- Cannot push (upload) or pull (download) from Github or do any Git stuff. For that you need the Github GUI.

Terminal does all of this and more.

- Open Terminal.
	- ⌘ (Command) + Space, or open Spotlight
	- "*Te*rminal"
	- `Enter`

- Keep it locked in your dock. Right click on the icon, highlight options, check "Keep in Dock".

- When terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde `~`. 

- `Directories` are the same things as `folders`. They contain files and other `directories`.

## COMMANDS

Terminal provides a Command Line Interface (CLI) to the operating system. The Command Line understands commands written in the `bash scripting language`.

> When you run Terminal, you are running a terminal emulator that is running a 'shell'. A shell is just a user interface for accessing an operating system. On OS X the default shell is called Bash. Bash is a type of UNIX shell. On Unix-based operating systems such as OSX or Linux, you can see which shell you are running with the command: $SHELL --version. You could get Terminal to run a shell other than Bash if you wanted.

We will be using Bash commands. Bash commands are one abbreviated word or acronym:

- `pwd` - Prints working directory. Shows you a `path`. This `path` shows you where are curently located in the filesystem (like sending up a flare or homing beacon). You can see how far you have 'traveled' from your home directory.
- `ls` - Lists contents of the current directory. You can see all the immediate _child_ directories, and all of the files that are not hidden. You can tell if `ls` worked by typing `pwd`.

* Commands can take `flags` denoted by a dash `-`
	- `ls -a` - list content including hidden files 

	
&#x1F535; **Ask (30 sec)**

- What is a 'path'?
- If I type `ls`, it will show me the contents of what?

<br>
<hr>

## DIRECTORY STRUCTURE

Directories (folders) can have directories within them. This creates a tree structure where directories can have many children with many different branches.

![](http://i.imgur.com/M6OgKZJ.png)

With the command line, we can reference the child/parent directories of the current working directory and navigate anywhere within our system.


## CHANGING DIRECTORIES

We can navigate to other directories _relative_ to the current working directory.

- `cd directoryname`
	- navigates into a child directory called _directoryname_. _directoryname_ is a child of the current directory.
- `cd ..` 
	- navigates into the parent of the current directory

We can also just go straight to the home directory `~`

- `cd` or `cd ~`

Useful shortcuts:

- letter[TAB]
	- autocompletes

- up / down arrow
	- cycles through previously used commands
	

Examples of changing directories

```
cd Desktop                // Desktop

cd child_directory        // Desktop/child_directory

cd ..                     // Desktop (change back to the parent of child_directory)

```

&#x1F535; **Activity (2 min)**

* Navigate to Library
* Pick a directory and navigate to the end with `cd directoryname`. Remember to autocomplete.
* Then navigate back up with `cd ..`
* Navigate to Library
* Pick a directory and navigate to the end
* Navigate back home with `cd`

<br>
<hr>

## MAKING FILES AND FOLDERS

`mkdir` - makes a directory

Example: 

- `mkdir directory_name`
       
	> makes a directory called 'directory_name'`

<br>

`touch` - creates an empty file


Example:

- `touch file.txt`

	> makes a .txt file

<br>


Useful shortcuts:

- put multiple file / directory names after the command
	- `mkdir directory1 directory2`
	- `touch index.html app.js readme.md` 

<br>

&#x1F535; **Activity (5 min)**

**Construct a Labyrinth**

* Navigate to Desktop
* `mkdir Labyrinth`, `cd Labyrinth`
* Make a directory structure like this:

![labyrinth](https://i.imgur.com/V1zaeBT.png)

<br>
<hr>

## RELATIVE PATHING

- `/` 
	- chain more directories to the current path
	- `cd directoryname/child_directory`
	- `cd directoryname/other_directory/furthest_directory`
	- `cd ../sibling_directory`
	- `cd ../../..`

Examples :

```
cd Desktop/child_directory        // Desktop/child_directory

cd ../another_child               // Desktop/another_child

cd ../third_child/further         // Desktop/third_child/further
```

<br>

&#x1F535; **Code along (2 min)**

**Navigate the Labyrinth**

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the stairway
* From the stairway, navigate to the parlor
* From the parlor, navigate to the dining room
* From the dining room, navigate to the escher room
* From the escher room, navigate to the Labyrinth root

<br>

&#x1F535; **Activity (8 min)**

**Navigate the Labyrinth**

For each of these, write your command on one line, using full paths:

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the dining_room
* From the dining room, navigate back up the root directory
* From the Labyrinth root directory, navigate to the stairway
* From the stairway, navigate to the parlor
* From the parlor, navigate to the escher_room
* From the escher room, navigate to the throne_room
* From the throne_room, navigate to the ball_room

<br>
<hr>

## ABSOLUTE PATHING

Move anywhere relative to the home directory: 

`cd ~/` - the path starts in home directory

Example:

- `cd ~/Desktop/Labyrinth/stairway/escher_room`

	> navigates to the escher room _no matter where_ you are currently located in your filesystem

<br>


&#x1F535; **Activity (3 min)**

**Navigate the Labyrinth**

Using absolute pathing:

* Navigate to the throne_room
* Navigate to the ballroom
* Navigate to the parlor

<br>
<hr>


## COPYING FILES

`cp` - copy files

syntax:

`cp file_to_copy destination`


Example of copy-and-rename: 

- `cp filename.txt newfile.txt`
       
	> copies the file 'filename.txt' to 'newfile.txt'

<br>


Example of copy-and-relocate-and-rename:

- `cp filename.txt directory/newfile.txt`

	> copies the file `filename.txt` to `newfile.txt` within a child directory
	
<br>	 

Example of copy-and-relocate:

- cp filename.txt directory

	> copies the file `filename.txt` to a child directory _without_ renaming the file
	
<br>


&#x1F535; **Activity (8 min)**

**Copy files to locations within the Labyrinth**

* Navigate to the Throne Room
* Stay within the Throne Room for this exercise, and use **relative pathing**
* Copy the `goblin_king.txt` file to `goblin_king_mirror_image.txt` (in the same directory)
* Copy the `goblin_king_mirror_image.txt` file to `goblin_king_iii.txt`
* Copy the `goblin_king_iii.txt` file to the `stairway` directory (the parent of Throne_Room)
	* Navigate into `stairway` to check if the file has been copied, then go back to the throne room
* Copy the `goblin_king.txt` file to the `escher_room` and rename the file `jareth.txt`
	* Navigate into the `escher_room` to check if the file has been copied. 

FIGURE IT OUT

Using an **absolute path** for the file destination:

* Copy the `jareth.txt` file to the root Labyrinth directory


<br>
<hr>

## MOVING FILES

- `mv`

syntax:

- `mv file_to_move destination`


If you 'move' a file to its current location, the file is renamed:

Example of rename:

- `mv filename.txt newfile.txt`

	> renames 'filename.txt' to 'newfile.txt' by moving it to its current location
	
<br>


Example of relocate-and-rename:

- `mv filename.txt directory/newfile.txt`

	> moves 'filename.txt' to a child directory and renames the file to 'newfile.txt'

<br>

Example of relocate:

- `mv filename.txt directory`

	> moves 'filename.txt' to a child directory
	
<br>
 
&#x1F535; **Activity in pairs (9 min)**

**Move files around the Labyrinth**

* rename any of the goblin king files to `barn_owl.txt`
* rename any of the goblin king files to `blind_beggar.txt`
* Navigate to the ballroom
* Move sarah_williams from the ballroom into the escher room
* Move sarah_williams from the escher room to the dining room and rename the file `toby.txt`
* Using absolute pathing move `toby.txt` out of the Labyrinth and onto your Desktop

FIGURE IT OUT / RESEARCH

* Use `mv` to rename a _directory_:
	* Rename the ballroom directory to goblin_army_barracks
 
* Move two files within the Labyrinth to the parlor at the same time (without renaming them)

* Move `toby.txt` (on the Desktop) and two files within the Labyrinth to the goblin_army_barracks at the same time

<br>
<hr>

 
## COPYING DIRECTORIES

- Use the recursive flag `-r` with `cp` to copy directories and contents

Example:

- `cp -r ~/Desktop/Labyrinth/parlor ~/Desktop/Labyrinth/stairway`

	> Makes a copy of the parlor (and everything in it) in the stairway
	
<br>

Example:

- `cp -r ~/Desktop/Labyrinth/stairway ..`

	> Copies the stairway (and everything in it) to whatever the parent of the current directory is
	
<br>


&#x1F535; **Activity (3 min)**

**Copy directories around the Labyrinth**

* Copy the escher room and put the copy in the parlor
* Copy the throne room and put the copy in the root directory of the Labyrinth

<br>
<hr>

## DANGER ZONE

`rm` - remove a file

Example:

- `rm filename.txt`

	> Removes 'filename.txt'
	
<br>


`rm -r` - remove a directory and its contents

Example:

- `rm -r directory`

	> Removes 'directory' and its contents. USE WISELY!
	
<br>

`rm -rf`

Example:

- `rm -rf directory`

	> Removes 'directory' and its contents by force (no confirmation). USE WISELY!
	

<br>

&#x1F535; **Activity (4 min)**

* Navigate to the Labyrinth directory.
* Delete one of the files from the directory.
* Delete the stairway directory

<br>
<hr>
End of main lesson
<hr>

# OTHER TERMINAL COMMANDS

## KEYBOARD COMMANDS
### Efficient workflow

In job interviews you might be judged for how efficient your workflow is. As a developer, one general goal is to use the keyboard as much as possible and minimize the use of the mouse. Learning keyboard shortcuts speeds up your workflow.

### Bash shortcuts

`option + arrow` - move cursor from word to word

`ctrl + A` - move cursor to beginning of line

`ctrl + E` - move cursor to end of line

<br>

&#x1F535; **Activity (3 min)**

* Use the up and down arrows to cycle through previous commands
* Pick a lengthy command and use `option + arrow` to move from word to word
* Pick another command and use `option + arrow` to move to a word in the middle, and delete it
* Write a paragraph (a short story) in the Terminal, and then use `option + arrow` go to every word 'the' and delete
* Use `ctrl + A` to go to the beginning of the story and change the first word
* Use `ctrl + E` to go to the end of the story and add a word
* Use the up and down arrows to bring up the last command, and use `ctrl + A` and `ctrl + E`. Do this for the preceding five commands

<br>

Killing and Yanking

`ctrl + K` - 'kill' everything from cursor to the end of line

`ctrl + U` - 'kill' everything from cursor to beginning of line

`ctrl + W` - 'kill' a single word

`ctrl + Y` - 'yank' the stuff you 'killed' back into the command line

<br>

&#x1F535; **Activity (4 min)**

* Use the up arrow to cycle through previous commands, and pick one
* Use a keyboard shortcut to go to the beginning of the line
* Use `ctrl + K` to kill everything on the line
* Use the up arrow to cycle to a previous command, and use a keyboard shortcut to move the cursor to the middle of the line
* Use `ctrl + Y` to yank stuff into the line
* Use `ctrl + U` to kill everything back to the beginning of the line
* Use a keyboard shortcut to go to the end of the line
* Use `ctrl + W` to kill each word individually

<br>

Related to our keyboard shortcuts is screen real-estate. You can arrange windows on your desktop using keyboard shortcuts. Try not click and drag windows around, and instead press keys to relocate them.

- Download and enable Spectacle

`https://www.spectacleapp.com/`

- Spectacle keyboard commands

```
option+command+left
option+command+right
option+command+F
```

Instead of dragging windows around, switch windows with `command + TAB` and `command + shift + TAB`

<hr>

## MISC

- `;` semicolon for multiline commands

- `clear` or `ctrl + L` to scroll window up

- `cd - ` toggle last directory

- `man`
	- space to scroll, `:q` to quit

- `ls -l`

	- http://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.1.0/com.ibm.zos.v2r1.bpxa500/lscmd.htm#lscmd__longf

- `ls -la`
	- same as `ls -l` but with hidden files 

- `*` wildcard
	- Example `ls *.txt` 
	- Example `ls documents/*.txt`
	- Example `ls filename.*`
	- Example `ls f*lename.txt` 	 

<br>

&#x1F535; **Activity (4 min)**

* One one line, make a directory, go into that directory, touch a file, and list the contents of the directory
* Clear your window with both commands
* Use the manual to learn more about `ls`
* Use `ls` and a wildcard to list all the text files in the Labyrinth root directory. 
* Try using the wildcard to reference (any) child directories in the Labyrinth directory, and list any text files in those directories. 
* Also try it by using the wildcard to reference (any) child of (any) child directories in the Labyrinth, and list any text files in those directories.


<br>
<hr>




## OUTPUT REDIRECTION AND VIEWING FILES

- `>` redirect output and overwrite

`echo whatever man` - echo repeats back what you write

`echo whatever man > filename.txt` - will overwrite the contents of filename.txt with the echo

<br>

- `cat`
	- see the beginning of a file
	- `cat file.txt`
	- `cat file1.txt file2.txt`


<br>

&#x1F535; **Activity (3 min)**

* In the Labyrinth, make a file called `readme.txt`
* Use `echo` and `>` to write _Jim Henson waz here_ into `readme.txt`
* Use `cat` to check if the file has the text content

<br>


- `>>` append output

`echo whatever man >> filename.txt`

`ls Labyrinth >> filename.txt`

- `tail`
	- see the end of a file, good for logs
	- `tail file.txt`
	- `tail file1.txt file2.txt`

`date`

`date >> datelog.txt`

`whoami`

`whoami >> datelog.txt`

<br>

&#x1F535; **Activity (4 min)**

* On your desktop, make a file called `delete_after_ga.txt`
* After each of the following commands, use either `cat` or `tail` to check if the file has the text content
* Use `echo` and `>>` to write the text "What am I even doing" into `delete_after_ga.txt`
* Append the result of `ls Labyrinth` to the text that is already in `delete_after_ga.txt`
* Make another file called `log.txt`
* Write the result of `date` to the text inside `log.txt` 
* Append the result of `whoami` to the text inside `log.txt`

FIGURE IT OUT

* Can you append the contents of `delete_after_ga.txt` into `log.txt`?
* Use `cat` to see the contents of `log.txt` to check if it received the contents of `delete_after_ga.txt`

<br>
<hr>

## FILE EDITORS

1. vim	
	- `vi`
	- `:q` to exit
	- `:wq` to save and exit (git merge messages might put you in vim, save and quit with `:wq`)

1. emacs
	- `emacs` 
	- `ctrl-x ctrl-c` to exit

1. nano
	- `nano`
	- `ctrl-x` to exit

<br>

&#x1F535; **Activity (30 sec)**

* open vim
* quit vim

<br>
<hr>

## PROCESSES, PIPE, and GREP

* ps
	- list processes (application) started by user with process ID (PID)
	- `ps aux`
		- lists all running programs on the computer
	- `ps aux | grep Chrome`
		- search through the results and display those with 'Chrome'
	- `ps aux | pgrep Chrome` is the same as `pgrep Chrome`

* pipe `|` takes the result of a command and pipes it to the input of another command

	More on using pipe:
	
	http://unix.stackexchange.com/questions/30759/whats-a-good-example-of-piping-commands-together

* `grep` is a method of searching files or output by keyword
	* `grep searchterm filename`
 
	More on grep: 
	
	http://www.panix.com/~elflord/unix/grep.html

* `pgrep` is useful for grepping process ids

* `kill (pid)`
	- quit program from the command line by PID
	- `kill 1789`

&#x1F535; **Optional Activity (1 min)**

* run `ps aux` and see which program is consuming the most CPU
* use `pgrep` to get the process ids of all running Chrome instances
* `kill` a Chrome process (warning: results are unpredictable)

<br>
<hr>
License
<hr>