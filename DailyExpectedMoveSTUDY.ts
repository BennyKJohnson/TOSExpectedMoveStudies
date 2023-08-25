# Daily Expected Move
# Author: Benny33
# Date: 08-25-2023
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
    else if date == 20230502 then 20.293
    else if date == 20230503 then 39.173
    else if date == 20230504 then 34.274
    else if date == 20230505 then 32.756
    else if date == 20230508 then 21.465
    else if date == 20230509 then 20.892
    else if date == 20230510 then 38.124
    else if date == 20230511 then 23.0
    else if date == 20230512 then 21.692
    else if date == 20230515 then 22.551
    else if date == 20230516 then 21.123
    else if date == 20230517 then 21.695
    else if date == 20230518 then 21.337
    else if date == 20230519 then 24.356
    else if date == 20230522 then 23.134
    else if date == 20230523 then 23.951
    else if date == 20230524 then 25.978
    else if date == 20230525 then 28.139
    else if date == 20230526 then 29.444
    else if date == 20230530 then 25.064
    else if date == 20230531 then 26.129
    else if date == 20230601 then 23.368
    else if date == 20230602 then 26.697
    else if date == 20230605 then 21.952
    else if date == 20230606 then 20.904
    else if date == 20230607 then 20.987
    else if date == 20230608 then 20.832
    else if date == 20230609 then 21.44
    else if date == 20230612 then 19.691
    else if date == 20230613 then 35.055
    else if date == 20230614 then 34.896
    else if date == 20230615 then 26.1
    else if date == 20230616 then 26.782
    else if date == 20230620 then 21.316
    else if date == 20230621 then 24.093
    else if date == 20230622 then 22.501
    else if date == 20230623 then 22.073
    else if date == 20230626 then 23.28
    else if date == 20230627 then 20.383
    else if date == 20230628 then 19.547
    else if date == 20230629 then 21.75
    else if date == 20230630 then 24.005
    else if date == 20230703 then 16.144
    else if date == 20230705 then 19.803
    else if date == 20230706 then 21.688
    else if date == 20230707 then 29.971
    else if date == 20230710 then 23.152
    else if date == 20230711 then 21.799
    else if date == 20230712 then 34.76
    else if date == 20230713 then 23.375
    else if date == 20230714 then 27.476
    else if date == 20230717 then 19.123
    else if date == 20230718 then 18.952
    else if date == 20230719 then 18.775
    else if date == 20230720 then 21.475
    else if date == 20230721 then 21.125
    else if date == 20230724 then 19.292
    else if date == 20230725 then 18.179
    else if date == 20230726 then 30.666
    else if date == 20230727 then 20.088
    else if date == 20230728 then 30.181
    else if date == 20230731 then 19.251
    else if date == 20230801 then 21.052
    else if date == 20230802 then 21.178
    else if date == 20230803 then 30.667
    else if date == 20230804 then 28.586
    else if date == 20230807 then 23.932
    else if date == 20230808 then 22.819
    else if date == 20230809 then 22.106
    else if date == 20230810 then 36.999
    else if date == 20230811 then 30.037
    else if date == 20230814 then 25.949
    else if date == 20230815 then 23.742
    else if date == 20230816 then 30.169
    else if date == 20230817 then 31.92
    else if date == 20230818 then 35.894
    else if date == 20230821 then 35.474
    else if date == 20230822 then 22.476
    else if date == 20230823 then 25.161
    else if date == 20230824 then 24.267
    else if date == 20230825 then 33.958
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
    else if date == 20230502 then 2.059
    else if date == 20230503 then 3.777
    else if date == 20230504 then 3.637
    else if date == 20230505 then 3.596
    else if date == 20230508 then 2.815
    else if date == 20230509 then 2.391
    else if date == 20230510 then 3.764
    else if date == 20230511 then 2.435
    else if date == 20230512 then 2.462
    else if date == 20230515 then 2.858
    else if date == 20230516 then 2.366
    else if date == 20230517 then 2.536
    else if date == 20230518 then 2.557
    else if date == 20230519 then 2.924
    else if date == 20230522 then 2.894
    else if date == 20230523 then 2.416
    else if date == 20230524 then 2.798
    else if date == 20230525 then 3.264
    else if date == 20230526 then 3.386
    else if date == 20230530 then 4.271
    else if date == 20230531 then 2.795
    else if date == 20230601 then 3.107
    else if date == 20230602 then 2.976
    else if date == 20230605 then 2.483
    else if date == 20230606 then 2.286
    else if date == 20230607 then 2.211
    else if date == 20230608 then 2.052
    else if date == 20230609 then 2.416
    else if date == 20230612 then 2.53
    else if date == 20230613 then 3.551
    else if date == 20230614 then 3.83
    else if date == 20230615 then 3.002
    else if date == 20230616 then 3.499
    else if date == 20230620 then 2.677
    else if date == 20230621 then 2.479
    else if date == 20230622 then 2.171
    else if date == 20230623 then 2.267
    else if date == 20230626 then 2.443
    else if date == 20230627 then 2.3
    else if date == 20230628 then 2.228
    else if date == 20230629 then 2.333
    else if date == 20230630 then 2.865
    else if date == 20230703 then 2.314
    else if date == 20230705 then 2.054
    else if date == 20230706 then 2.256
    else if date == 20230707 then 3.01
    else if date == 20230710 then 2.495
    else if date == 20230711 then 2.335
    else if date == 20230712 then 3.56
    else if date == 20230713 then 2.46
    else if date == 20230714 then 2.695
    else if date == 20230717 then 2.324
    else if date == 20230718 then 2.185
    else if date == 20230719 then 2.319
    else if date == 20230720 then 2.471
    else if date == 20230721 then 2.298
    else if date == 20230724 then 2.251
    else if date == 20230725 then 2.43
    else if date == 20230726 then 3.44
    else if date == 20230727 then 2.517
    else if date == 20230728 then 3.401
    else if date == 20230731 then 2.159
    else if date == 20230801 then 2.24
    else if date == 20230802 then 2.234
    else if date == 20230803 then 3.421
    else if date == 20230804 then 3.045
    else if date == 20230807 then 3.257
    else if date == 20230808 then 2.465
    else if date == 20230809 then 2.435
    else if date == 20230810 then 3.692
    else if date == 20230811 then 3.435
    else if date == 20230814 then 2.685
    else if date == 20230815 then 2.031
    else if date == 20230816 then 3.194
    else if date == 20230817 then 3.144
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
    else if date == 20230502 then 1.887
    else if date == 20230503 then 3.48
    else if date == 20230504 then 3.152
    else if date == 20230505 then 3.228
    else if date == 20230508 then 2.372
    else if date == 20230509 then 2.633
    else if date == 20230510 then 3.194
    else if date == 20230511 then 2.093
    else if date == 20230512 then 2.11
    else if date == 20230515 then 2.432
    else if date == 20230516 then 2.049
    else if date == 20230517 then 2.063
    else if date == 20230518 then 2.272
    else if date == 20230519 then 3.414
    else if date == 20230522 then 2.817
    else if date == 20230523 then 2.587
    else if date == 20230524 then 2.597
    else if date == 20230525 then 3.018
    else if date == 20230526 then 3.249
    else if date == 20230530 then 4.767
    else if date == 20230531 then 3.535
    else if date == 20230601 then 3.668
    else if date == 20230602 then 3.746
    else if date == 20230605 then 2.909
    else if date == 20230606 then 2.805
    else if date == 20230607 then 2.555
    else if date == 20230608 then 3.16
    else if date == 20230609 then 2.939
    else if date == 20230612 then 3.216
    else if date == 20230613 then 4.925
    else if date == 20230614 then 4.791
    else if date == 20230615 then 3.938
    else if date == 20230616 then 4.42
    else if date == 20230620 then 3.23
    else if date == 20230621 then 3.38
    else if date == 20230622 then 2.795
    else if date == 20230623 then 3.044
    else if date == 20230626 then 3.279
    else if date == 20230627 then 3.233
    else if date == 20230628 then 3.032
    else if date == 20230629 then 2.99
    else if date == 20230630 then 3.007
    else if date == 20230703 then 2.37
    else if date == 20230705 then 2.519
    else if date == 20230706 then 2.575
    else if date == 20230707 then 3.422
    else if date == 20230710 then 2.726
    else if date == 20230711 then 2.573
    else if date == 20230712 then 3.927
    else if date == 20230713 then 2.692
    else if date == 20230714 then 3.162
    else if date == 20230717 then 2.955
    else if date == 20230718 then 2.652
    else if date == 20230719 then 3.137
    else if date == 20230720 then 3.492
    else if date == 20230721 then 3.429
    else if date == 20230724 then 3.268
    else if date == 20230725 then 3.688
    else if date == 20230726 then 4.772
    else if date == 20230727 then 3.275
    else if date == 20230728 then 3.843
    else if date == 20230731 then 1.65
    else if date == 20230801 then 2.691
    else if date == 20230802 then 2.7
    else if date == 20230803 then 4.201
    else if date == 20230804 then 3.907
    else if date == 20230807 then 3.387
    else if date == 20230808 then 2.844
    else if date == 20230809 then 2.825
    else if date == 20230810 then 4.279
    else if date == 20230811 then 3.528
    else if date == 20230814 then 3.392
    else if date == 20230815 then 2.68
    else if date == 20230816 then 3.429
    else if date == 20230817 then 3.59
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