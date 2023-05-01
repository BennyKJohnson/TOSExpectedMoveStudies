# Daily Expected Move
# Author: Benny33
# Date: 05-01-2023
#

input showDailyEM = yes;
input showSigma = yes;
input showLowerEMPrice = yes;
input showUpperEMPrice = yes;
input showLowerEMPrice2 = no;
input showUpperEMPrice2 = no;
input showLowerEMPrice3 = no;
input showUpperEMPrice3 = no;

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
    else if date == 20230403 then 27.646
    else if date == 20230404 then 21.952
    else if date == 20230405 then 23.011
    else if date == 20230406 then 22.968
    else if date == 20230410 then 23.568
    else if date == 20230411 then 22.723
    else if date == 20230412 then 37.896
    else if date == 20230413 then 24.782
    else if date == 20230414 then 24.992
    else if date == 20230417 then 21.482
    else if date == 20230418 then 20.185
    else if date == 20230419 then 21.9
    else if date == 20230420 then 23.959
    else if date == 20230421 then 26.107
    else if date == 20230424 then 24.137
    else if date == 20230425 then 21.644
    else if date == 20230426 then 23.259
    else if date == 20230427 then 22.389
    else if date == 20230428 then 32.134
    else if date == 20230501 then 22.054
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
    else if date == 20230403 then 3.277
    else if date == 20230404 then 2.282
    else if date == 20230405 then 2.193
    else if date == 20230406 then 2.247
    else if date == 20230410 then 3.765
    else if date == 20230411 then 2.626
    else if date == 20230412 then 3.761
    else if date == 20230413 then 2.574
    else if date == 20230414 then 2.347
    else if date == 20230417 then 2.524
    else if date == 20230418 then 2.389
    else if date == 20230419 then 2.395
    else if date == 20230420 then 2.437
    else if date == 20230421 then 2.693
    else if date == 20230424 then 2.714
    else if date == 20230425 then 2.252
    else if date == 20230426 then 2.709
    else if date == 20230427 then 2.417
    else if date == 20230428 then 3.295
    else if date == 20230501 then 2.637
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
    else if date == 20230403 then 3.319
    else if date == 20230404 then 2.271
    else if date == 20230405 then 2.221
    else if date == 20230406 then 2.365
    else if date == 20230410 then 4.041
    else if date == 20230411 then 2.653
    else if date == 20230412 then 3.913
    else if date == 20230413 then 2.511
    else if date == 20230414 then 2.327
    else if date == 20230417 then 2.559
    else if date == 20230418 then 2.466
    else if date == 20230419 then 2.552
    else if date == 20230420 then 2.447
    else if date == 20230421 then 2.808
    else if date == 20230424 then 2.6
    else if date == 20230425 then 2.765
    else if date == 20230426 then 3.172
    else if date == 20230427 then 2.961
    else if date == 20230428 then 3.438
    else if date == 20230501 then 2.645
else nil;

def ndxExpectedMove =
 if date == 20230417 then 100.593
    else if date == 20230418 then 92.738
    else if date == 20230419 then 98.46
    else if date == 20230420 then 98.938
else nil;


def expectedMove = 
 if GetSymbol() == "SPX" then spxExpectedMove
    else if GetSymbol() == "SPY" then spyExpectedMove
    else if GetSymbol() == "QQQ" then qqqExpectedMove
    else if GetSymbol() == "NDX" then ndxExpectedMove
else nil;
def lowerEMPriceLevel = if expectedMove then yesterdayClose - expectedMove else nil;
def upperEMPriceLevel = if expectedMove then yesterdayClose + expectedMove else nil;
def upperEM2PriceLevel = upperEMPriceLevel + expectedMove;
def lowerEM2PriceLevel = lowerEMPriceLevel - expectedMove;
def upperEM3PriceLevel = upperEM2PriceLevel + expectedMove;
def lowerEM3PriceLevel = lowerEM2PriceLevel - expectedMove;

def currentMove = AbsValue(close(priceType = PriceType.LAST, period = AggregationPeriod.DAY) - yesterdayClose);
def sigma = if !isNaN(expectedMove) then currentMove / expectedMove else nil;

plot LowerEM = lowerEMPriceLevel;
plot UpperEM = upperEMPriceLevel;
plot LowerEM2 = lowerEM2PriceLevel;
plot UpperEM2 = upperEM2PriceLevel;
plot LowerEM3 = lowerEM3PriceLevel;
plot UpperEM3 = upperEM3PriceLevel;

LowerEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
LowerEM.SetDefaultColor(Color.YELLOW);
LowerEM.SetLineWeight(2);
LowerEM.SetStyle(Curve.FIRM);

UpperEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
UpperEM.SetDefaultColor(Color.YELLOW);
UpperEM.SetLineWeight(2);
UpperEM.SetStyle(Curve.FIRM);

LowerEM2.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
LowerEM2.SetDefaultColor(Color.ORANGE);
LowerEM2.SetLineWeight(2);
LowerEM2.SetStyle(Curve.FIRM);
LowerEM2.Hide();

UpperEM2.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
UpperEM2.SetDefaultColor(Color.ORANGE);
UpperEM2.SetLineWeight(2);
UpperEM2.SetStyle(Curve.FIRM);
UpperEM2.Hide();

LowerEM3.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
LowerEM3.SetDefaultColor(Color.RED);
LowerEM3.SetLineWeight(2);
LowerEM3.SetStyle(Curve.FIRM);
LowerEM3.Hide();

UpperEM3.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
UpperEM3.SetDefaultColor(Color.RED);
UpperEM3.SetLineWeight(2);
UpperEM3.SetStyle(Curve.FIRM);
UpperEM3.Hide();

AddLabel(showDailyEM and !isNaN(expectedMove), "Daily EM " + expectedMove, Color.CYAN);
AddLabel(showSigma and !isNaN(sigma), " Daily Sigma " + sigma + " ", Color.CYAN);

AddLabel(showLowerEMPrice and !isNaN(lowerEMPriceLevel), " LowerEM " + AsText(LowerEMPriceLevel) + "  ", Color.CYAN);
AddLabel(showUpperEMPrice and !isNaN(upperEMPriceLevel), " UpperEM " + AsText(UpperEMPriceLevel) + "  ", Color.CYAN);
AddLabel(showLowerEMPrice2 and !isNaN(lowerEM2PriceLevel), " LowerEM2 " + AsText(LowerEM2PriceLevel) + "  ", Color.CYAN);
AddLabel(showUpperEMPrice2 and !isNaN(upperEM2PriceLevel), " UpperEM2 " + AsText(UpperEM2PriceLevel) + "  ", Color.CYAN);
AddLabel(showLowerEMPrice3 and !isNaN(lowerEM3PriceLevel), " LowerEM3 " + AsText(LowerEM3PriceLevel) + "  ", Color.CYAN);
AddLabel(showUpperEMPrice3 and !isNaN(upperEM3PriceLevel), " UpperEM3 " + AsText(UpperEM3PriceLevel) + "  ", Color.CYAN);