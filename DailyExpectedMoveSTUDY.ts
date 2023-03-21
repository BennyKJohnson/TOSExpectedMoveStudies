# Daily Expected Move
# Author: Benny33
# Date: 03-21-2023
#

input showDailyEM = yes;

def yesterdayClose = Close(period = AggregationPeriod.DAY)[1];
def date = GetYYYYMMDD();
def nil = Double.NaN;

# Daily Expected Moves
def spxExpectedMove =
 if date == 20230313 then 50.872
    else if date == 20230314 then 72.567
    else if date == 20230315 then 37.515
    else if date == 20230316 then 48.034
    else if date == 20230317 then 37.87
    else if date == 20230320 then 54.497
    else if date == 20230321 then 32.429
else nil;

def spyExpectedMove =
 if date == 20230313 then 5.26
    else if date == 20230314 then 7.325
    else if date == 20230315 then 4.31
    else if date == 20230316 then 4.942
    else if date == 20230317 then 4.211
    else if date == 20230320 then 5.465
    else if date == 20230321 then 3.373
else nil;

def qqqExpectedMove =
 if date == 20230313 then 4.583
    else if date == 20230314 then 6.252
    else if date == 20230315 then 2.168
    else if date == 20230316 then 4.132
    else if date == 20230317 then 4.053
    else if date == 20230320 then 4.532
    else if date == 20230321 then 2.975
else nil;


def expectedMove = 
 if GetSymbol() == "SPX" then spxExpectedMove
    else if GetSymbol() == "SPY" then spyExpectedMove
    else if GetSymbol() == "QQQ" then qqqExpectedMove
else nil;
def lowerEMPriceLevel = if expectedMove then yesterdayClose - expectedMove else nil;
def upperEMPriceLevel = if expectedMove then yesterdayClose + expectedMove else nil;

plot LowerEM = lowerEMPriceLevel;
plot UpperEM = upperEMPriceLevel;

LowerEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
LowerEM.SetDefaultColor(Color.YELLOW);
LowerEM.SetLineWeight(2);
LowerEM.SetStyle(Curve.FIRM);

UpperEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
UpperEM.SetDefaultColor(Color.YELLOW);
UpperEM.SetLineWeight(2);
UpperEM.SetStyle(Curve.FIRM);

AddLabel(showDailyEM and !isNaN(expectedMove), "Daily EM " + expectedMove, Color.CYAN);