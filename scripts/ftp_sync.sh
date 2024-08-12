#!/bin/bash
# cretids: Michael Hutter, 20.11.2021

# This Script synchronizes a folder in a remote computer with a local folder.
# In practice, the remote folder will be updated to match the local one, performing only the minimum changes
# required for the synchronization (for example, if a file already exists it will not upload it again).
# The script uses the FTP protocol, very commonly used and supported by the website host.

HOST='ftp.bestmessina.org'
USER=$FTP_USER
PASS=$FTP_PASSWORD
SERVERFOLDER='/htdocs'
PCFOLDER='/home/circleci/project/build'
CopyMoreThanOneFileSimultaneously="--parallel=10"

CopyServerdataToLocal=0 # 0=Upload, 1=Download
IgnoreSubdirectories=0
ContinuePartiallyTransmittedFiles=0
DontOverwriteNewerExistingFiles=0 # If this is used ContinuePartiallyTransmittedFiles will not work!

DeleteAdditionalFilesInDestinationDir=1 # Deletes files in DestDir which are not present in SourceDir
RemoveSourceFilesAfterTransfer=0 # Moves the files instead of copying them

ExcludeParams='--exclude-glob .* --exclude-glob .*/' # Exclude (hidden) files and direcories -> starting with a dot

OnlyShowChangesButDontChangeFiles=0 # DryRun mode
OutputAsMuchInfoAsPossible=1 # Verbose mode

################################################################################

if [ $CopyServerdataToLocal -eq 1 ]; then
   if [ $OutputAsMuchInfoAsPossible -eq 1 ]; then
      echo "Modus=Download"
   fi
   DIRECTORIES="$SERVERFOLDER $PCFOLDER"
else
   if [ $OutputAsMuchInfoAsPossible -eq 1 ]; then
      echo "Modus=Upload"
   fi
   REVERSE='--reverse'
   DIRECTORIES="$PCFOLDER $SERVERFOLDER"
fi
if [ $IgnoreSubdirectories -eq 1 ]; then
   IGNORESUBDIRS='--no-recursion'
fi

if [ $ContinuePartiallyTransmittedFiles -eq 1 ]; then
   CONTINUEFILES='--continue'
fi
if [ $DontOverwriteNewerExistingFiles -eq 1 ]; then
   ONLYNEWER='--only-newer'
fi
if [ $DeleteAdditionalFilesInDestinationDir -eq 1 ]; then
   DELETE='--delete'
fi
if [ $RemoveSourceFilesAfterTransfer -eq 1 ]; then
   REMOVE='--Remove-source-files'
fi
if [ $OnlyShowChangesButDontChangeFiles -eq 1 ]; then
   DRYRUN='--dry-run'
fi
if [ $OutputAsMuchInfoAsPossible -eq 1 ]; then
   VERBOSE='--verbose'
fi

lftp -f "
open $HOST
user $USER $PASS
set ftp:ssl-allow no
lcd $PCFOLDER
mirror $DRYRUN $REVERSE $IGNORESUBDIRS $DELETE $REMOVE $CONTINUEFILES $ONLYNEWER $CopyMoreThanOneFileSimultaneously --use-cache $ExcludeParams $VERBOSE $DIRECTORIES
bye
"