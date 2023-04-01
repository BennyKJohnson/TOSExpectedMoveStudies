# Daily Expected Move
# Author: Benny33
# Date: 04-01-2023
#

input showDailyEM = yes;
input showSigma = yes;

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
    else if date == 20230322 then 56.2
    else if date == 20230323 then 38.169
    else if date == 20230324 then 41.271
    else if date == 20230327 then 39.985
    else if date == 20230328 then 29.874
    else if date == 20230329 then 25.916
    else if date == 20230330 then 26.565
    else if date == 20230331 then 25.238
    else if date == 20230403 then 30.57
else nil;

def spyExpectedMove =
 if date == 20230313 then 5.26
    else if date == 20230314 then 7.325
    else if date == 20230315 then 4.31
    else if date == 20230316 then 4.942
    else if date == 20230317 then 4.211
    else if date == 20230320 then 5.465
    else if date == 20230321 then 3.373
    else if date == 20230322 then 5.26
    else if date == 20230323 then 4.502
    else if date == 20230324 then 4.458
    else if date == 20230327 then 4.285
    else if date == 20230328 then 3.367
    else if date == 20230329 then 2.662
    else if date == 20230330 then 3.052
    else if date == 20230331 then 2.869
    else if date == 20230403 then 3.346
else nil;

def qqqExpectedMove =
 if date == 20230313 then 4.583
    else if date == 20230314 then 6.252
    else if date == 20230315 then 2.168
    else if date == 20230316 then 4.132
    else if date == 20230317 then 4.053
    else if date == 20230320 then 4.532
    else if date == 20230321 then 2.975
    else if date == 20230322 then 4.95
    else if date == 20230323 then 4.07
    else if date == 20230324 then 4.232
    else if date == 20230327 then 3.816
    else if date == 20230328 then 2.915
    else if date == 20230329 then 2.406
    else if date == 20230330 then 3.13
    else if date == 20230331 then 2.961
    else if date == 20230403 then 3.391
else nil;


def expectedMove = 
 if GetSymbol() == "SPX" then spxExpectedMove
    else if GetSymbol() == "SPY" then spyExpectedMove
    else if GetSymbol() == "QQQ" then qqqExpectedMove
else nil;
def lowerEMPriceLevel = if expectedMove then yesterdayClose - expectedMove else nil;
def upperEMPriceLevel = if expectedMove then yesterdayClose + expectedMove else nil;

def currentMove = AbsValue(close(priceType = PriceType.LAST, period = AggregationPeriod.DAY) - yesterdayClose);
def sigma = if !isNaN(expectedMove) then currentMove / expectedMove else nil;

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
AddLabel(showSigma and !isNaN(sigma), " Daily Sigma " + sigma + " ", Color.CYAN);