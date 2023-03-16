# Thinkorswim Scripts for Daily and Weekly Expected Moves Studies

This repository contains Thinkorswim scripts that display daily and weekly expected moves for various underlyings. 
The scripts draw a Priceline for upper and lower expected move for a given period.

Due to the limitations of Thinkscript, it is not possible to source the TOS expected move for an underlying within the script. As a result, the expected move data is manually hardcoded into the scripts. These scripts are frequently updated (daily or weekly) through automation to ensure that the most recent expected move data is included in the script.

<img width="1390" alt="image" src="https://user-images.githubusercontent.com/7237725/225746715-48560be6-f9aa-4ee7-ba97-16fb39c3c221.png">

## Installation

To use these scripts in Thinkorswim, follow these steps:

1. Download the .ts files from this repository.
2. Open Thinkorswim and go to Studies > Edit Studies.
3. Click on the Import button at the bottom of the window.
4. Select the downloaded .ts files and click Open.
5. The scripts should now be available under Studies.

## Updating
In order to incorporate the latest EM data, the scripts need to be updated. This should be done after each trading session, as the daily data is updated between sessions.
To ensure that the weekly data includes the most recent EM information, the script must be updated every week after the Friday trading session.

## Supported Underlyings
**Daily**
- SPX, SPY, QQQ

**Weekly**
- SP100 and more



