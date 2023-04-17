# TOS+Auto Weekly Expected Move 
# Author: Benny33
# Date: 04-17-2023
#

declare hide_on_intraday;
declare once_per_bar;

# IV input parameters
input emSkewPercentage = 70; 
input emBandwidth = 100; 


def lastImpliedVolatility; 
def expectedMove; 
def upperEM; 
def lowerEM;
def lastWeekClose; 
def hasTOSExpectedMove;

def date = GetYYYYMMDD();

# Weekly Expected Moves
def aaplExpectedMove =
 if date == 20230313 then 5.709
    else if date == 20230320 then 5.773
    else if date == 20230327 then 4.77
    else if date == 20230403 then 3.648
    else if date == 20230410 then 4.309
else 0;

def abbvExpectedMove =
 if date == 20230313 then 4.574
    else if date == 20230320 then 4.61
    else if date == 20230327 then 4.144
    else if date == 20230403 then 2.994
    else if date == 20230410 then 3.699
else 0;

def abtExpectedMove =
 if date == 20230313 then 3.378
    else if date == 20230320 then 3.585
    else if date == 20230327 then 3.224
    else if date == 20230403 then 1.978
    else if date == 20230410 then 2.418
else 0;

def acnExpectedMove =
 if date == 20230313 then 9.804
    else if date == 20230320 then 14.089
    else if date == 20230327 then 9.502
    else if date == 20230403 then 6.198
    else if date == 20230410 then 7.594
else 0;

def adbeExpectedMove =
 if date == 20230313 then 23.975
    else if date == 20230320 then 17.222
    else if date == 20230327 then 14.367
    else if date == 20230403 then 10.36
    else if date == 20230410 then 12.341
else 0;

def aigExpectedMove =
 if date == 20230313 then 2.853
    else if date == 20230320 then 3.779
    else if date == 20230327 then 2.602
    else if date == 20230403 then 1.425
    else if date == 20230410 then 1.63
else 0;

def amdExpectedMove =
 if date == 20230313 then 5.335
    else if date == 20230320 then 6.627
    else if date == 20230327 then 5.844
    else if date == 20230403 then 4.144
    else if date == 20230410 then 4.55
else 0;

def amgnExpectedMove =
 if date == 20230313 then 6.528
    else if date == 20230320 then 7.325
    else if date == 20230327 then 6.889
    else if date == 20230403 then 4.768
    else if date == 20230410 then 4.995
else 0;

def amtExpectedMove =
 if date == 20230313 then 8.105
else 0;

def amznExpectedMove =
 if date == 20230313 then 4.687
    else if date == 20230320 then 4.941
    else if date == 20230327 then 4.117
    else if date == 20230403 then 3.178
    else if date == 20230410 then 3.878
else 0;

def avgoExpectedMove =
 if date == 20230313 then 24.952
    else if date == 20230320 then 24.698
    else if date == 20230327 then 20.133
    else if date == 20230403 then 14.817
    else if date == 20230410 then 17.852
else 0;

def axpExpectedMove =
 if date == 20230313 then 7.382
    else if date == 20230320 then 8.432
    else if date == 20230327 then 6.998
    else if date == 20230403 then 4.461
    else if date == 20230410 then 5.653
else 0;

def baExpectedMove =
 if date == 20230313 then 9.555
    else if date == 20230320 then 9.909
    else if date == 20230327 then 8.189
    else if date == 20230403 then 6.234
    else if date == 20230410 then 7.409
else 0;

def bacExpectedMove =
 if date == 20230313 then 2.099
    else if date == 20230320 then 2.212
    else if date == 20230327 then 1.499
    else if date == 20230403 then 0.931
    else if date == 20230410 then 1.2
else 0;

def bkExpectedMove =
 if date == 20230313 then 3.125
else 0;

def bkngExpectedMove =
 if date == 20230313 then 97.505
    else if date == 20230320 then 100.706
    else if date == 20230327 then 96.6
    else if date == 20230403 then 66.974
    else if date == 20230410 then 84.085
else 0;

def blkExpectedMove =
 if date == 20230313 then 32.472
    else if date == 20230320 then 30.552
    else if date == 20230327 then 27.788
    else if date == 20230403 then 16.985
    else if date == 20230410 then 28.49
else 0;

def bmyExpectedMove =
 if date == 20230313 then 2.298
    else if date == 20230320 then 2.435
    else if date == 20230327 then 1.764
    else if date == 20230403 then 1.409
    else if date == 20230410 then 1.471
else 0;

def brkbExpectedMove =
 if date == 20230313 then 10.522
    else if date == 20230320 then 11.101
    else if date == 20230327 then 8.556
    else if date == 20230403 then 5.066
    else if date == 20230410 then 6.529
else 0;

def cExpectedMove =
 if date == 20230313 then 2.802
    else if date == 20230320 then 3.518
    else if date == 20230327 then 2.422
    else if date == 20230403 then 1.375
    else if date == 20230410 then 2.29
else 0;

def catExpectedMove =
 if date == 20230313 then 10.431
    else if date == 20230320 then 10.135
    else if date == 20230327 then 9.057
    else if date == 20230403 then 6.09
    else if date == 20230410 then 7.358
else 0;

def chtrExpectedMove =
 if date == 20230313 then 18.255
    else if date == 20230320 then 19.459
    else if date == 20230327 then 17.753
    else if date == 20230403 then 12.228
    else if date == 20230410 then 15.337
else 0;

def clExpectedMove =
 if date == 20230313 then 1.954
else 0;

def cmcsaExpectedMove =
 if date == 20230313 then 1.602
    else if date == 20230320 then 1.758
    else if date == 20230327 then 1.385
    else if date == 20230403 then 0.987
    else if date == 20230410 then 1.179
else 0;

def cofExpectedMove =
 if date == 20230313 then 5.717
    else if date == 20230320 then 6.812
    else if date == 20230327 then 5.75
    else if date == 20230403 then 3.305
    else if date == 20230410 then 4.166
else 0;

def copExpectedMove =
 if date == 20230313 then 4.921
    else if date == 20230320 then 5.766
    else if date == 20230327 then 4.661
    else if date == 20230403 then 3.294
    else if date == 20230410 then 4.3
else 0;

def costExpectedMove =
 if date == 20230313 then 16.57
    else if date == 20230320 then 16.313
    else if date == 20230327 then 12.335
    else if date == 20230403 then 10.78
    else if date == 20230410 then 12.221
else 0;

def crmExpectedMove =
 if date == 20230313 then 8.852
    else if date == 20230320 then 8.178
    else if date == 20230327 then 7.213
    else if date == 20230403 then 5.482
    else if date == 20230410 then 6.373
else 0;

def cscoExpectedMove =
 if date == 20230313 then 1.592
    else if date == 20230320 then 1.57
    else if date == 20230327 then 1.306
    else if date == 20230403 then 0.958
    else if date == 20230410 then 1.163
else 0;

def cvsExpectedMove =
 if date == 20230313 then 2.675
    else if date == 20230320 then 2.777
    else if date == 20230327 then 2.292
    else if date == 20230403 then 1.8
    else if date == 20230410 then 2.061
else 0;

def cvxExpectedMove =
 if date == 20230313 then 5.933
    else if date == 20230320 then 7.348
    else if date == 20230327 then 5.708
    else if date == 20230403 then 3.952
    else if date == 20230410 then 4.548
else 0;

def dhrExpectedMove =
 if date == 20230313 then 9.895
    else if date == 20230320 then 9.989
    else if date == 20230327 then 8.073
    else if date == 20230403 then 5.165
    else if date == 20230410 then 6.726
else 0;

def disExpectedMove =
 if date == 20230313 then 4.226
    else if date == 20230320 then 4.163
    else if date == 20230327 then 3.566
    else if date == 20230403 then 2.76
    else if date == 20230410 then 3.198
else 0;

def dowExpectedMove =
 if date == 20230313 then 2.369
    else if date == 20230320 then 2.656
    else if date == 20230327 then 2.019
    else if date == 20230403 then 1.423
    else if date == 20230410 then 1.685
else 0;

def dukExpectedMove =
 if date == 20230313 then 2.964
else 0;

def eemExpectedMove =
 if date == 20230313 then 1.076
    else if date == 20230320 then 2.68
    else if date == 20230327 then 0.905
    else if date == 20230403 then 0.7
    else if date == 20230410 then 0.77
else 0;

def emrExpectedMove =
 if date == 20230313 then 3.011
    else if date == 20230320 then 3.245
    else if date == 20230327 then 2.649
    else if date == 20230403 then 2.607
    else if date == 20230410 then 3.78
else 0;

def excExpectedMove =
 if date == 20230313 then 1.339
else 0;

def fExpectedMove =
 if date == 20230313 then 0.735
    else if date == 20230320 then 0.754
    else if date == 20230327 then 0.617
    else if date == 20230403 then 0.481
    else if date == 20230410 then 0.561
else 0;

def fdxExpectedMove =
 if date == 20230313 then 12.816
    else if date == 20230320 then 10.015
    else if date == 20230327 then 8.039
    else if date == 20230403 then 7.474
    else if date == 20230410 then 6.97
else 0;

def fxiExpectedMove =
 if date == 20230313 then 1.188
    else if date == 20230320 then 1.168
    else if date == 20230327 then 1.1
    else if date == 20230403 then 0.936
    else if date == 20230410 then 1.0
else 0;

def gdExpectedMove =
 if date == 20230313 then 6.718
    else if date == 20230320 then 6.918
    else if date == 20230327 then 6.03
    else if date == 20230403 then 3.752
    else if date == 20230410 then 4.935
else 0;

def geExpectedMove =
 if date == 20230313 then 3.923
    else if date == 20230320 then 4.046
    else if date == 20230327 then 3.478
    else if date == 20230403 then 2.199
    else if date == 20230410 then 2.849
else 0;

def gildExpectedMove =
 if date == 20230313 then 3.143
    else if date == 20230320 then 2.746
    else if date == 20230327 then 2.242
    else if date == 20230403 then 1.674
    else if date == 20230410 then 2.585
else 0;

def gldExpectedMove =
 if date == 20230313 then 3.69
    else if date == 20230320 then 5.737
    else if date == 20230327 then 4.408
    else if date == 20230403 then 2.844
    else if date == 20230410 then 4.226
else 0;

def gmExpectedMove =
 if date == 20230313 then 1.931
    else if date == 20230320 then 2.017
    else if date == 20230327 then 1.759
    else if date == 20230403 then 1.362
    else if date == 20230410 then 1.577
else 0;

def googExpectedMove =
 if date == 20230313 then 4.166
    else if date == 20230320 then 4.391
    else if date == 20230327 then 3.914
    else if date == 20230403 then 2.917
    else if date == 20230410 then 3.86
else 0;

def googlExpectedMove =
 if date == 20230313 then 4.128
    else if date == 20230320 then 4.394
    else if date == 20230327 then 3.894
    else if date == 20230403 then 3.23
    else if date == 20230410 then 3.817
else 0;

def gsExpectedMove =
 if date == 20230313 then 16.839
    else if date == 20230320 then 18.186
    else if date == 20230327 then 13.911
    else if date == 20230403 then 7.644
    else if date == 20230410 then 9.474
else 0;

def hdExpectedMove =
 if date == 20230313 then 11.231
    else if date == 20230320 then 10.168
    else if date == 20230327 then 8.646
    else if date == 20230403 then 6.404
    else if date == 20230410 then 7.524
else 0;

def honExpectedMove =
 if date == 20230313 then 5.72
    else if date == 20230320 then 7.063
    else if date == 20230327 then 5.305
    else if date == 20230403 then 3.57
    else if date == 20230410 then 4.63
else 0;

def hygExpectedMove =
 if date == 20230313 then 1.47
    else if date == 20230320 then 1.5
    else if date == 20230327 then 1.109
    else if date == 20230403 then 0.83
    else if date == 20230410 then 1.031
else 0;

def ibmExpectedMove =
 if date == 20230313 then 3.503
    else if date == 20230320 then 5.844
    else if date == 20230327 then 3.079
    else if date == 20230403 then 2.345
    else if date == 20230410 then 2.735
else 0;

def intcExpectedMove =
 if date == 20230313 then 1.363
    else if date == 20230320 then 1.641
    else if date == 20230327 then 1.52
    else if date == 20230403 then 1.249
    else if date == 20230410 then 1.336
else 0;

def iwmExpectedMove =
 if date == 20230313 then 7.147
    else if date == 20230320 then 7.521
    else if date == 20230327 then 5.717
    else if date == 20230403 then 3.854
    else if date == 20230410 then 4.828
else 0;

def jnjExpectedMove =
 if date == 20230313 then 3.954
    else if date == 20230320 then 4.068
    else if date == 20230327 then 3.358
    else if date == 20230403 then 2.619
    else if date == 20230410 then 3.093
else 0;

def jpmExpectedMove =
 if date == 20230313 then 6.846
    else if date == 20230320 then 7.864
    else if date == 20230327 then 5.394
    else if date == 20230403 then 3.113
    else if date == 20230410 then 5.621
else 0;

def khcExpectedMove =
 if date == 20230313 then 1.087
    else if date == 20230320 then 1.233
    else if date == 20230327 then 0.999
    else if date == 20230403 then 0.692
    else if date == 20230410 then 0.826
else 0;

def koExpectedMove =
 if date == 20230313 then 1.528
    else if date == 20230320 then 1.462
    else if date == 20230327 then 1.247
    else if date == 20230403 then 0.896
    else if date == 20230410 then 1.034
else 0;

def linExpectedMove =
 if date == 20230313 then 14.394
else 0;

def llyExpectedMove =
 if date == 20230313 then 11.647
    else if date == 20230320 then 9.792
    else if date == 20230327 then 9.589
    else if date == 20230403 then 8.682
    else if date == 20230410 then 9.237
else 0;

def lmtExpectedMove =
 if date == 20230313 then 12.595
    else if date == 20230320 then 14.4
    else if date == 20230327 then 11.058
    else if date == 20230403 then 7.935
    else if date == 20230410 then 9.894
else 0;

def lowExpectedMove =
 if date == 20230313 then 8.13
    else if date == 20230320 then 7.915
    else if date == 20230327 then 6.525
    else if date == 20230403 then 4.898
    else if date == 20230410 then 5.866
else 0;

def maExpectedMove =
 if date == 20230313 then 13.693
    else if date == 20230320 then 13.543
    else if date == 20230327 then 11.047
    else if date == 20230403 then 7.318
    else if date == 20230410 then 9.41
else 0;

def mcdExpectedMove =
 if date == 20230313 then 7.139
    else if date == 20230320 then 7.664
    else if date == 20230327 then 6.161
    else if date == 20230403 then 4.378
    else if date == 20230410 then 4.802
else 0;

def mdlzExpectedMove =
 if date == 20230313 then 1.704
    else if date == 20230320 then 1.882
    else if date == 20230327 then 1.457
    else if date == 20230403 then 1.047
    else if date == 20230410 then 1.39
else 0;

def mdtExpectedMove =
 if date == 20230313 then 2.815
    else if date == 20230320 then 4.18
    else if date == 20230327 then 2.559
    else if date == 20230403 then 1.739
    else if date == 20230410 then 2.13
else 0;

def metExpectedMove =
 if date == 20230313 then 3.544
    else if date == 20230320 then 4.029
    else if date == 20230327 then 3.068
    else if date == 20230403 then 1.72
    else if date == 20230410 then 1.914
else 0;

def metaExpectedMove =
 if date == 20230313 then 9.235
    else if date == 20230320 then 11.177
    else if date == 20230327 then 9.615
    else if date == 20230403 then 7.02
    else if date == 20230410 then 8.534
else 0;

def mmmExpectedMove =
 if date == 20230313 then 4.091
    else if date == 20230320 then 4.481
    else if date == 20230327 then 3.638
    else if date == 20230403 then 2.499
    else if date == 20230410 then 2.931
else 0;

def moExpectedMove =
 if date == 20230313 then 1.263
    else if date == 20230320 then 1.746
    else if date == 20230327 then 1.121
    else if date == 20230403 then 0.762
    else if date == 20230410 then 0.86
else 0;

def mrkExpectedMove =
 if date == 20230313 then 3.266
    else if date == 20230320 then 3.874
    else if date == 20230327 then 2.931
    else if date == 20230403 then 2.254
    else if date == 20230410 then 2.649
else 0;

def msExpectedMove =
 if date == 20230313 then 4.486
    else if date == 20230320 then 5.569
    else if date == 20230327 then 4.185
    else if date == 20230403 then 2.367
    else if date == 20230410 then 2.867
else 0;

def msftExpectedMove =
 if date == 20230313 then 10.456
    else if date == 20230320 then 11.699
    else if date == 20230327 then 9.372
    else if date == 20230403 then 7.062
    else if date == 20230410 then 8.294
else 0;

def neeExpectedMove =
 if date == 20230313 then 2.756
else 0;

def nflxExpectedMove =
 if date == 20230313 then 16.509
    else if date == 20230320 then 16.359
    else if date == 20230327 then 17.469
    else if date == 20230403 then 12.77
    else if date == 20230410 then 14.003
else 0;

def nkeExpectedMove =
 if date == 20230313 then 4.98
    else if date == 20230320 then 10.964
    else if date == 20230327 then 4.335
    else if date == 20230403 then 2.966
    else if date == 20230410 then 3.658
else 0;

def nvdaExpectedMove =
 if date == 20230313 then 14.727
    else if date == 20230320 then 17.338
    else if date == 20230327 then 14.219
    else if date == 20230403 then 10.34
    else if date == 20230410 then 12.197
else 0;

def orclExpectedMove =
 if date == 20230313 then 3.129
    else if date == 20230320 then 3.225
    else if date == 20230327 then 2.765
    else if date == 20230403 then 1.989
    else if date == 20230410 then 2.382
else 0;

def pepExpectedMove =
 if date == 20230313 then 4.67
    else if date == 20230320 then 5.341
    else if date == 20230327 then 4.135
    else if date == 20230403 then 2.784
    else if date == 20230410 then 3.206
else 0;

def pfeExpectedMove =
 if date == 20230313 then 1.45
    else if date == 20230320 then 1.247
    else if date == 20230327 then 1.077
    else if date == 20230403 then 0.861
    else if date == 20230410 then 0.977
else 0;

def pgExpectedMove =
 if date == 20230313 then 3.726
    else if date == 20230320 then 3.875
    else if date == 20230327 then 3.262
    else if date == 20230403 then 2.168
    else if date == 20230410 then 2.488
else 0;

def pmExpectedMove =
 if date == 20230313 then 2.631
    else if date == 20230320 then 3.133
    else if date == 20230327 then 2.335
    else if date == 20230403 then 1.707
    else if date == 20230410 then 1.875
else 0;

def pyplExpectedMove =
 if date == 20230313 then 4.209
    else if date == 20230320 then 4.03
    else if date == 20230327 then 3.503
    else if date == 20230403 then 2.615
    else if date == 20230410 then 3.042
else 0;

def qcomExpectedMove =
 if date == 20230313 then 5.742
    else if date == 20230320 then 6.073
    else if date == 20230327 then 4.962
    else if date == 20230403 then 3.847
    else if date == 20230410 then 4.482
else 0;

def qqqExpectedMove =
 if date == 20230313 then 10.026
    else if date == 20230320 then 10.663
    else if date == 20230327 then 8.748
    else if date == 20230403 then 6.38
    else if date == 20230410 then 7.871
    else if date == 20230417 then 6.303
else 0;

def rtxExpectedMove =
 if date == 20230313 then 3.028
    else if date == 20230320 then 3.346
    else if date == 20230327 then 2.702
    else if date == 20230403 then 1.762
    else if date == 20230410 then 2.251
else 0;

def sbuxExpectedMove =
 if date == 20230313 then 3.721
    else if date == 20230320 then 3.763
    else if date == 20230327 then 3.105
    else if date == 20230403 then 2.416
    else if date == 20230410 then 2.744
else 0;

def schwExpectedMove =
 if date == 20230313 then 8.846
    else if date == 20230320 then 6.433
    else if date == 20230327 then 4.467
    else if date == 20230403 then 2.65
    else if date == 20230410 then 2.618
else 0;

def slvExpectedMove =
 if date == 20230313 then 0.741
    else if date == 20230320 then 1.007
    else if date == 20230327 then 0.8
    else if date == 20230403 then 0.66
    else if date == 20230410 then 0.9
else 0;

def soExpectedMove =
 if date == 20230313 then 1.846
    else if date == 20230320 then 2.117
    else if date == 20230327 then 1.78
    else if date == 20230403 then 1.292
    else if date == 20230410 then 1.553
else 0;

def spgExpectedMove =
 if date == 20230313 then 6.112
else 0;

def spxExpectedMove =
 if date == 20170227 then 23.76
    else if date == 20170306 then 19.958
    else if date == 20170313 then 26.465
    else if date == 20170320 then 25.138
    else if date == 20170327 then 36.228
    else if date == 20170403 then 22.633
    else if date == 20170410 then 23.833
    else if date == 20170417 then 32.749
    else if date == 20170424 then 46.73
    else if date == 20170501 then 20.809
    else if date == 20170508 then 31.477
    else if date == 20170515 then 22.593
    else if date == 20170522 then 28.293
    else if date == 20170530 then 19.015
    else if date == 20170605 then 20.528
    else if date == 20170612 then 26.731
    else if date == 20170619 then 21.192
    else if date == 20170626 then 22.075
    else if date == 20170703 then 24.548
    else if date == 20170710 then 22.738
    else if date == 20170717 then 19.5
    else if date == 20170724 then 18.554
    else if date == 20170731 then 21.674
    else if date == 20170807 then 23.515
    else if date == 20170814 then 41.956
    else if date == 20170821 then 33.796
    else if date == 20170828 then 23.212
    else if date == 20170905 then 19.881
    else if date == 20170911 then 15.684
    else if date == 20170918 then 20.768
    else if date == 20170925 then 10.302
    else if date == 20171002 then 19.82
    else if date == 20171009 then 20.628
    else if date == 20171016 then 22.195
    else if date == 20171023 then 11.344
    else if date == 20171030 then 23.545
    else if date == 20171106 then 21.295
    else if date == 20171113 then 31.269
    else if date == 20171120 then 20.247
    else if date == 20171127 then 21.227
    else if date == 20171204 then 35.105
    else if date == 20171211 then 24.793
    else if date == 20171218 then 23.813
    else if date == 20171226 then 10.035
    else if date == 20180102 then 29.766
    else if date == 20180108 then 22.308
    else if date == 20180116 then 26.751
    else if date == 20180122 then 31.518
    else if date == 20180129 then 32.194
    else if date == 20180205 then 57.632
    else if date == 20180212 then 94.524
    else if date == 20180220 then 53.661
    else if date == 20180226 then 43.023
    else if date == 20180305 then 56.086
    else if date == 20180312 then 40.358
    else if date == 20180319 then 45.57
    else if date == 20180326 then 76.697
    else if date == 20180402 then 62.334
    else if date == 20180409 then 68.317
    else if date == 20180416 then 48.546
    else if date == 20180423 then 46.667
    else if date == 20180430 then 41.6
    else if date == 20180507 then 40.214
    else if date == 20180514 then 33.004
    else if date == 20180521 then 33.139
    else if date == 20180529 then 33.003
    else if date == 20180604 then 31.981
    else if date == 20180611 then 35.777
    else if date == 20180618 then 32.511
    else if date == 20180625 then 36.707
    else if date == 20180702 then 42.089
    else if date == 20180709 then 34.147
    else if date == 20180716 then 29.902
    else if date == 20180723 then 31.939
    else if date == 20180730 then 34.585
    else if date == 20180806 then 28.392
    else if date == 20180813 then 41.709
    else if date == 20180820 then 34.526
    else if date == 20180827 then 30.997
    else if date == 20180904 then 30.292
    else if date == 20180910 then 42.095
    else if date == 20180917 then 30.522
    else if date == 20180924 then 33.307
    else if date == 20181001 then 34.844
    else if date == 20181008 then 48.365
    else if date == 20181015 then 35.502
    else if date == 20181022 then 65.607
    else if date == 20181029 then 89.28
    else if date == 20181105 then 65.315
    else if date == 20181112 then 49.865
    else if date == 20181119 then 47.072
    else if date == 20181126 then 61.462
    else if date == 20181203 then 68.967
    else if date == 20181210 then 83.498
    else if date == 20181217 then 65.313
    else if date == 20181224 then 91.54
    else if date == 20181231 then 84.295
    else if date == 20190107 then 60.58
    else if date == 20190114 then 45.994
    else if date == 20190122 then 41.144
    else if date == 20190128 then 46.988
    else if date == 20190204 then 39.939
    else if date == 20190211 then 41.686
    else if date == 20190219 then 34.597
    else if date == 20190225 then 33.795
    else if date == 20190304 then 33.274
    else if date == 20190311 then 43.387
    else if date == 20190318 then 33.413
    else if date == 20190325 then 52.067
    else if date == 20190401 then 37.189
    else if date == 20190408 then 30.848
    else if date == 20190415 then 27.434
    else if date == 20190422 then 32.357
    else if date == 20190429 then 38.407
    else if date == 20190506 then 34.052
    else if date == 20190513 then 54.569
    else if date == 20190520 then 52.309
    else if date == 20190528 then 47.034
    else if date == 20190603 then 56.118
    else if date == 20190610 then 46.648
    else if date == 20190617 then 41.513
    else if date == 20190624 then 45.046
    else if date == 20190701 then 52.937
    else if date == 20190708 then 33.782
    else if date == 20190715 then 31.991
    else if date == 20190722 then 40.788
    else if date == 20190729 then 38.865
    else if date == 20190805 then 61.466
    else if date == 20190812 then 58.373
    else if date == 20190819 then 58.072
    else if date == 20190826 then 70.228
    else if date == 20190903 then 60.858
    else if date == 20190909 then 37.902
    else if date == 20190916 then 42.548
    else if date == 20190923 then 47.489
    else if date == 20190930 then 54.779
    else if date == 20191007 then 53.188
    else if date == 20191014 then 51.342
    else if date == 20191021 then 37.678
    else if date == 20191028 then 33.371
    else if date == 20191104 then 31.11
    else if date == 20191111 then 29.989
    else if date == 20191118 then 32.823
    else if date == 20191125 then 27.461
    else if date == 20191202 then 37.028
    else if date == 20191209 then 42.123
    else if date == 20191216 then 46.356
    else if date == 20191223 then 28.439
    else if date == 20191230 then 34.716
    else if date == 20200106 then 44.283
    else if date == 20200113 then 37.866
    else if date == 20200121 then 29.774
    else if date == 20200127 then 52.103
    else if date == 20200203 then 81.521
    else if date == 20200210 then 50.418
    else if date == 20200218 then 39.285
    else if date == 20200224 then 54.001
    else if date == 20200302 then 182.429
    else if date == 20200309 then 162.122
    else if date == 20200316 then 226.456
    else if date == 20200323 then 228.279
    else if date == 20200330 then 205.214
    else if date == 20200406 then 119.787
    else if date == 20200413 then 135.061
    else if date == 20200420 then 110.578
    else if date == 20200427 then 95.711
    else if date == 20200504 then 106.683
    else if date == 20200511 then 78.693
    else if date == 20200518 then 93.843
    else if date == 20200526 then 71.684
    else if date == 20200601 then 78.538
    else if date == 20200608 then 78.355
    else if date == 20200615 then 125.677
    else if date == 20200622 then 112.679
    else if date == 20200629 then 101.183
    else if date == 20200706 then 80.403
    else if date == 20200713 then 76.199
    else if date == 20200720 then 74.471
    else if date == 20200727 then 76.762
    else if date == 20200803 then 71.536
    else if date == 20200810 then 62.997
    else if date == 20200817 then 63.809
    else if date == 20200824 then 61.973
    else if date == 20200831 then 62.186
    else if date == 20200908 then 107.549
    else if date == 20200914 then 99.865
    else if date == 20200921 then 83.178
    else if date == 20200928 then 87.38
    else if date == 20201005 then 89.575
    else if date == 20201012 then 71.989
    else if date == 20201019 then 80.972
    else if date == 20201026 then 78.504
    else if date == 20201102 then 158.199
    else if date == 20201109 then 91.468
    else if date == 20201116 then 82.409
    else if date == 20201123 then 67.394
    else if date == 20201130 then 70.569
    else if date == 20201207 then 64.677
    else if date == 20201214 then 81.993
    else if date == 20201221 then 54.735
    else if date == 20201228 then 57.964
    else if date == 20210104 then 89.703
    else if date == 20210111 then 77.066
    else if date == 20210119 then 82.479
    else if date == 20210125 then 73.485
    else if date == 20210201 then 132.678
    else if date == 20210208 then 63.334
    else if date == 20210216 then 57.37
    else if date == 20210222 then 74.06
    else if date == 20210301 then 124.717
    else if date == 20210308 then 99.622
    else if date == 20210315 then 73.552
    else if date == 20210322 then 75.808
    else if date == 20210329 then 59.625
    else if date == 20210405 then 58.022
    else if date == 20210412 then 57.948
    else if date == 20210419 then 54.319
    else if date == 20210426 then 61.626
    else if date == 20210503 then 67.06
    else if date == 20210510 then 61.383
    else if date == 20210517 then 78.814
    else if date == 20210524 then 76.262
    else if date == 20210601 then 76.213
    else if date == 20210531 then 50.674
    else if date == 20210607 then 53.129
    else if date == 20210614 then 59.546
    else if date == 20210621 then 90.368
    else if date == 20210628 then 53.203
    else if date == 20210706 then 42.423
    else if date == 20210712 then 62.17
    else if date == 20210719 then 73.575
    else if date == 20210726 then 57.376
    else if date == 20210802 then 65.036
    else if date == 20210809 then 48.34
    else if date == 20210816 then 49.881
    else if date == 20210823 then 67.723
    else if date == 20210830 then 57.338
    else if date == 20210907 then 50.19
    else if date == 20210913 then 115.355
    else if date == 20210920 then 95.132
    else if date == 20210927 then 70.655
    else if date == 20211004 then 88.948
    else if date == 20211011 then 80.12
    else if date == 20211018 then 61.431
    else if date == 20211025 then 54.054
    else if date == 20211101 then 63.696
    else if date == 20211108 then 62.636
    else if date == 20211115 then 60.511
    else if date == 20211122 then 54.821
    else if date == 20211129 then 154.314
    else if date == 20211206 then 157.195
    else if date == 20211213 then 79.676
    else if date == 20211220 then 87.798
    else if date == 20211227 then 72.369
    else if date == 20220103 then 62.545
    else if date == 20220110 then 79.063
    else if date == 20220118 then 85.654
    else if date == 20220124 then 149.643
    else if date == 20220131 then 137.337
    else if date == 20220207 then 107.328
    else if date == 20220214 then 134.939
    else if date == 20220222 then 121.315
    else if date == 20220228 then 126.176
    else if date == 20220307 then 146.04
    else if date == 20220314 then 144.1
    else if date == 20220321 then 106.2
    else if date == 20220328 then 88.889
    else if date == 20220404 then 74.769
    else if date == 20220411 then 76.531
    else if date == 20220418 then 98.019
    else if date == 20220425 then 134.084
    else if date == 20220502 then 168.485
    else if date == 20220509 then 136.208
    else if date == 20220516 then 133.575
    else if date == 20220523 then 126.474
    else if date == 20220531 then 100.305
    else if date == 20220606 then 101.825
    else if date == 20220613 then 131.693
    else if date == 20220621 then 120.649
    else if date == 20220627 then 112.728
    else if date == 20220705 then 93.851
    else if date == 20220711 then 94.888
    else if date == 20220718 then 87.777
    else if date == 20220725 then 97.459
    else if date == 20220801 then 80.9
    else if date == 20220808 then 87.607
    else if date == 20220815 then 76.023
    else if date == 20220822 then 82.354
    else if date == 20220829 then 107.815
    else if date == 20220906 then 94.099
    else if date == 20220912 then 97.166
    else if date == 20220919 then 117.318
    else if date == 20220926 then 122.854
    else if date == 20221003 then 121.213
    else if date == 20221010 then 124.562
    else if date == 20221017 then 120.249
    else if date == 20221024 then 114.056
    else if date == 20221031 then 118.528
    else if date == 20221107 then 116.976
    else if date == 20221114 then 99.202
    else if date == 20221121 then 72.244
    else if date == 20221128 then 76.232
    else if date == 20221205 then 66.525
    else if date == 20221212 then 127.098
    else if date == 20221219 then 87.712
    else if date == 20221227 then 70.576
    else if date == 20230103 then 83.991
    else if date == 20230109 then 98.415
    else if date == 20230117 then 64.79
    else if date == 20230123 then 71.519
    else if date == 20230130 then 94.447
    else if date == 20230206 then 76.66
    else if date == 20230213 then 104.079
    else if date == 20230221 then 73.402
    else if date == 20230227 then 75.889
    else if date == 20230306 then 78.175
    else if date == 20230313 then 111.924
    else if date == 20230313 then 111.928
    else if date == 20230320 then 121.222
    else if date == 20230327 then 89.014
    else if date == 20230403 then 58.786
    else if date == 20230410 then 68.902
    else if date == 20230417 then 57.648
else 0;

def spyExpectedMove =
 if date == 20230313 then 11.86
    else if date == 20230320 then 12.026
    else if date == 20230327 then 9.147
    else if date == 20230403 then 6.253
    else if date == 20230410 then 7.615
    else if date == 20230417 then 5.951
else 0;

def tExpectedMove =
 if date == 20230313 then 0.589
    else if date == 20230320 then 0.649
    else if date == 20230327 then 0.52
    else if date == 20230403 then 0.487
    else if date == 20230410 then 0.498
else 0;

def tgtExpectedMove =
 if date == 20230313 then 6.448
    else if date == 20230320 then 6.916
    else if date == 20230327 then 5.535
    else if date == 20230403 then 4.485
    else if date == 20230410 then 5.441
else 0;

def tltExpectedMove =
 if date == 20230313 then 2.911
    else if date == 20230320 then 3.184
    else if date == 20230327 then 2.694
    else if date == 20230403 then 2.043
    else if date == 20230410 then 2.679
else 0;

def tmoExpectedMove =
 if date == 20230313 then 22.481
    else if date == 20230320 then 22.623
    else if date == 20230327 then 20.773
    else if date == 20230403 then 15.777
    else if date == 20230410 then 16.418
else 0;

def tmusExpectedMove =
 if date == 20230313 then 4.797
    else if date == 20230320 then 5.056
    else if date == 20230327 then 3.907
    else if date == 20230403 then 2.687
    else if date == 20230410 then 3.541
else 0;

def tslaExpectedMove =
 if date == 20230313 then 12.551
    else if date == 20230320 then 12.217
    else if date == 20230327 then 12.464
    else if date == 20230403 then 14.578
    else if date == 20230410 then 11.255
else 0;

def txnExpectedMove =
 if date == 20230313 then 6.821
    else if date == 20230320 then 7.157
    else if date == 20230327 then 5.925
    else if date == 20230403 then 4.42
    else if date == 20230410 then 5.256
else 0;

def unhExpectedMove =
 if date == 20230313 then 15.363
    else if date == 20230320 then 14.883
    else if date == 20230327 then 13.58
    else if date == 20230403 then 14.551
    else if date == 20230410 then 16.496
else 0;

def unpExpectedMove =
 if date == 20230313 then 7.243
    else if date == 20230320 then 8.943
    else if date == 20230327 then 6.435
    else if date == 20230403 then 4.558
    else if date == 20230410 then 5.186
else 0;

def upsExpectedMove =
 if date == 20230313 then 6.695
    else if date == 20230320 then 7.96
    else if date == 20230327 then 5.957
    else if date == 20230403 then 3.84
    else if date == 20230410 then 5.033
else 0;

def usbExpectedMove =
 if date == 20230313 then 2.519
    else if date == 20230320 then 3.34
    else if date == 20230327 then 2.529
    else if date == 20230403 then 1.294
    else if date == 20230410 then 1.618
else 0;

def vExpectedMove =
 if date == 20230313 then 7.75
    else if date == 20230320 then 8.209
    else if date == 20230327 then 6.471
    else if date == 20230403 then 4.329
    else if date == 20230410 then 5.329
else 0;

def vzExpectedMove =
 if date == 20230313 then 1.216
    else if date == 20230320 then 1.185
    else if date == 20230327 then 0.97
    else if date == 20230403 then 0.96
    else if date == 20230410 then 0.88
else 0;

def wbaExpectedMove =
 if date == 20230313 then 1.296
    else if date == 20230320 then 1.388
    else if date == 20230327 then 2.068
    else if date == 20230403 then 0.87
    else if date == 20230410 then 1.054
else 0;

def wfcExpectedMove =
 if date == 20230313 then 2.568
    else if date == 20230320 then 2.969
    else if date == 20230327 then 2.138
    else if date == 20230403 then 1.263
    else if date == 20230410 then 2.105
else 0;

def wmtExpectedMove =
 if date == 20230313 then 3.867
    else if date == 20230320 then 3.636
    else if date == 20230327 then 3.118
    else if date == 20230403 then 3.691
    else if date == 20230410 then 2.892
else 0;

def xhbExpectedMove =
 if date == 20230313 then 4.138
    else if date == 20230320 then 3.753
    else if date == 20230327 then 3.455
    else if date == 20230403 then 1.692
    else if date == 20230410 then 2.934
else 0;

def xlbExpectedMove =
 if date == 20230313 then 2.979
    else if date == 20230320 then 2.979
    else if date == 20230327 then 2.533
    else if date == 20230403 then 1.877
    else if date == 20230410 then 3.29
else 0;

def xlcExpectedMove =
 if date == 20230313 then 1.41
    else if date == 20230320 then 1.639
    else if date == 20230327 then 1.197
    else if date == 20230403 then 1.021
    else if date == 20230410 then 1.052
else 0;

def xleExpectedMove =
 if date == 20230313 then 3.352
    else if date == 20230320 then 3.884
    else if date == 20230327 then 3.175
    else if date == 20230403 then 2.203
    else if date == 20230410 then 2.673
else 0;

def xlfExpectedMove =
 if date == 20230313 then 1.783
    else if date == 20230320 then 1.879
    else if date == 20230327 then 1.268
    else if date == 20230403 then 0.751
    else if date == 20230410 then 0.918
else 0;

def xliExpectedMove =
 if date == 20230313 then 4.064
    else if date == 20230320 then 2.235
    else if date == 20230327 then 4.857
    else if date == 20230403 then 1.588
else 0;

def xlkExpectedMove =
 if date == 20230313 then 5.252
    else if date == 20230320 then 5.12
    else if date == 20230327 then 4.404
    else if date == 20230403 then 3.01
    else if date == 20230410 then 3.694
else 0;

def xlpExpectedMove =
 if date == 20230313 then 1.563
    else if date == 20230320 then 1.931
    else if date == 20230327 then 1.454
    else if date == 20230403 then 0.93
    else if date == 20230410 then 0.873
else 0;

def xlreExpectedMove =
 if date == 20230313 then 1.195
else 0;

def xluExpectedMove =
 if date == 20230313 then 1.771
    else if date == 20230320 then 2.388
    else if date == 20230327 then 1.829
    else if date == 20230403 then 1.125
    else if date == 20230410 then 1.39
else 0;

def xlvExpectedMove =
 if date == 20230313 then 3.207
    else if date == 20230320 then 3.897
    else if date == 20230327 then 2.559
    else if date == 20230403 then 1.768
    else if date == 20230410 then 2.153
else 0;

def xlyExpectedMove =
 if date == 20230313 then 3.89
    else if date == 20230320 then 3.961
    else if date == 20230327 then 4.437
    else if date == 20230403 then 3.787
    else if date == 20230410 then 3.762
else 0;

def xomExpectedMove =
 if date == 20230313 then 4.397
    else if date == 20230320 then 4.981
    else if date == 20230327 then 4.045
    else if date == 20230403 then 2.959
    else if date == 20230410 then 3.482
else 0;

def xrtExpectedMove =
 if date == 20230313 then 2.518
    else if date == 20230320 then 4.254
    else if date == 20230327 then 2.97
    else if date == 20230403 then 1.985
    else if date == 20230410 then 2.039
else 0;


def tosExpectedMove = 
 if GetSymbol() == "AAPL" then aaplExpectedMove
    else if GetSymbol() == "ABBV" then abbvExpectedMove
    else if GetSymbol() == "ABT" then abtExpectedMove
    else if GetSymbol() == "ACN" then acnExpectedMove
    else if GetSymbol() == "ADBE" then adbeExpectedMove
    else if GetSymbol() == "AIG" then aigExpectedMove
    else if GetSymbol() == "AMD" then amdExpectedMove
    else if GetSymbol() == "AMGN" then amgnExpectedMove
    else if GetSymbol() == "AMT" then amtExpectedMove
    else if GetSymbol() == "AMZN" then amznExpectedMove
    else if GetSymbol() == "AVGO" then avgoExpectedMove
    else if GetSymbol() == "AXP" then axpExpectedMove
    else if GetSymbol() == "BA" then baExpectedMove
    else if GetSymbol() == "BAC" then bacExpectedMove
    else if GetSymbol() == "BK" then bkExpectedMove
    else if GetSymbol() == "BKNG" then bkngExpectedMove
    else if GetSymbol() == "BLK" then blkExpectedMove
    else if GetSymbol() == "BMY" then bmyExpectedMove
    else if GetSymbol() == "BRK/B" then brkbExpectedMove
    else if GetSymbol() == "C" then cExpectedMove
    else if GetSymbol() == "CAT" then catExpectedMove
    else if GetSymbol() == "CHTR" then chtrExpectedMove
    else if GetSymbol() == "CL" then clExpectedMove
    else if GetSymbol() == "CMCSA" then cmcsaExpectedMove
    else if GetSymbol() == "COF" then cofExpectedMove
    else if GetSymbol() == "COP" then copExpectedMove
    else if GetSymbol() == "COST" then costExpectedMove
    else if GetSymbol() == "CRM" then crmExpectedMove
    else if GetSymbol() == "CSCO" then cscoExpectedMove
    else if GetSymbol() == "CVS" then cvsExpectedMove
    else if GetSymbol() == "CVX" then cvxExpectedMove
    else if GetSymbol() == "DHR" then dhrExpectedMove
    else if GetSymbol() == "DIS" then disExpectedMove
    else if GetSymbol() == "DOW" then dowExpectedMove
    else if GetSymbol() == "DUK" then dukExpectedMove
    else if GetSymbol() == "EEM" then eemExpectedMove
    else if GetSymbol() == "EMR" then emrExpectedMove
    else if GetSymbol() == "EXC" then excExpectedMove
    else if GetSymbol() == "F" then fExpectedMove
    else if GetSymbol() == "FDX" then fdxExpectedMove
    else if GetSymbol() == "FXI" then fxiExpectedMove
    else if GetSymbol() == "GD" then gdExpectedMove
    else if GetSymbol() == "GE" then geExpectedMove
    else if GetSymbol() == "GILD" then gildExpectedMove
    else if GetSymbol() == "GLD" then gldExpectedMove
    else if GetSymbol() == "GM" then gmExpectedMove
    else if GetSymbol() == "GOOG" then googExpectedMove
    else if GetSymbol() == "GOOGL" then googlExpectedMove
    else if GetSymbol() == "GS" then gsExpectedMove
    else if GetSymbol() == "HD" then hdExpectedMove
    else if GetSymbol() == "HON" then honExpectedMove
    else if GetSymbol() == "HYG" then hygExpectedMove
    else if GetSymbol() == "IBM" then ibmExpectedMove
    else if GetSymbol() == "INTC" then intcExpectedMove
    else if GetSymbol() == "IWM" then iwmExpectedMove
    else if GetSymbol() == "JNJ" then jnjExpectedMove
    else if GetSymbol() == "JPM" then jpmExpectedMove
    else if GetSymbol() == "KHC" then khcExpectedMove
    else if GetSymbol() == "KO" then koExpectedMove
    else if GetSymbol() == "LIN" then linExpectedMove
    else if GetSymbol() == "LLY" then llyExpectedMove
    else if GetSymbol() == "LMT" then lmtExpectedMove
    else if GetSymbol() == "LOW" then lowExpectedMove
    else if GetSymbol() == "MA" then maExpectedMove
    else if GetSymbol() == "MCD" then mcdExpectedMove
    else if GetSymbol() == "MDLZ" then mdlzExpectedMove
    else if GetSymbol() == "MDT" then mdtExpectedMove
    else if GetSymbol() == "MET" then metExpectedMove
    else if GetSymbol() == "META" then metaExpectedMove
    else if GetSymbol() == "MMM" then mmmExpectedMove
    else if GetSymbol() == "MO" then moExpectedMove
    else if GetSymbol() == "MRK" then mrkExpectedMove
    else if GetSymbol() == "MS" then msExpectedMove
    else if GetSymbol() == "MSFT" then msftExpectedMove
    else if GetSymbol() == "NEE" then neeExpectedMove
    else if GetSymbol() == "NFLX" then nflxExpectedMove
    else if GetSymbol() == "NKE" then nkeExpectedMove
    else if GetSymbol() == "NVDA" then nvdaExpectedMove
    else if GetSymbol() == "ORCL" then orclExpectedMove
    else if GetSymbol() == "PEP" then pepExpectedMove
    else if GetSymbol() == "PFE" then pfeExpectedMove
    else if GetSymbol() == "PG" then pgExpectedMove
    else if GetSymbol() == "PM" then pmExpectedMove
    else if GetSymbol() == "PYPL" then pyplExpectedMove
    else if GetSymbol() == "QCOM" then qcomExpectedMove
    else if GetSymbol() == "QQQ" then qqqExpectedMove
    else if GetSymbol() == "RTX" then rtxExpectedMove
    else if GetSymbol() == "SBUX" then sbuxExpectedMove
    else if GetSymbol() == "SCHW" then schwExpectedMove
    else if GetSymbol() == "SLV" then slvExpectedMove
    else if GetSymbol() == "SO" then soExpectedMove
    else if GetSymbol() == "SPG" then spgExpectedMove
    else if GetSymbol() == "SPX" then spxExpectedMove
    else if GetSymbol() == "SPY" then spyExpectedMove
    else if GetSymbol() == "T" then tExpectedMove
    else if GetSymbol() == "TGT" then tgtExpectedMove
    else if GetSymbol() == "TLT" then tltExpectedMove
    else if GetSymbol() == "TMO" then tmoExpectedMove
    else if GetSymbol() == "TMUS" then tmusExpectedMove
    else if GetSymbol() == "TSLA" then tslaExpectedMove
    else if GetSymbol() == "TXN" then txnExpectedMove
    else if GetSymbol() == "UNH" then unhExpectedMove
    else if GetSymbol() == "UNP" then unpExpectedMove
    else if GetSymbol() == "UPS" then upsExpectedMove
    else if GetSymbol() == "USB" then usbExpectedMove
    else if GetSymbol() == "V" then vExpectedMove
    else if GetSymbol() == "VZ" then vzExpectedMove
    else if GetSymbol() == "WBA" then wbaExpectedMove
    else if GetSymbol() == "WFC" then wfcExpectedMove
    else if GetSymbol() == "WMT" then wmtExpectedMove
    else if GetSymbol() == "XHB" then xhbExpectedMove
    else if GetSymbol() == "XLB" then xlbExpectedMove
    else if GetSymbol() == "XLC" then xlcExpectedMove
    else if GetSymbol() == "XLE" then xleExpectedMove
    else if GetSymbol() == "XLF" then xlfExpectedMove
    else if GetSymbol() == "XLI" then xliExpectedMove
    else if GetSymbol() == "XLK" then xlkExpectedMove
    else if GetSymbol() == "XLP" then xlpExpectedMove
    else if GetSymbol() == "XLRE" then xlreExpectedMove
    else if GetSymbol() == "XLU" then xluExpectedMove
    else if GetSymbol() == "XLV" then xlvExpectedMove
    else if GetSymbol() == "XLY" then xlyExpectedMove
    else if GetSymbol() == "XOM" then xomExpectedMove
    else if GetSymbol() == "XRT" then xrtExpectedMove
else 0;
def autoExpectedMove = close[1] * lastImpliedVolatility * Sqrt(6) / Sqrt(365) * emSkewPercentage / 100 * emBandwidth / 100;

def isMonday = GetDayOfWeek(GetYYYYMMDD()) == 1;
def isTuesday = GetDayOfWeek(GetYYYYMMDD()) == 2;
def wasFridayOnPreviousTradingSession = GetDayOfWeek(GetYYYYMMDD()[1]) == 5;
def isStartOfTradingWeek = isMonday or (wasFridayOnPreviousTradingSession and isTuesday);

if isStartOfTradingWeek then {
    lastImpliedVolatility = imp_volatility()[1];
	lastWeekClose = close[1];

    expectedMove = if tosExpectedMove then tosExpectedMove else autoExpectedMove;
    hasTOSExpectedMove = tosExpectedMove;

    upperEM = close[1] + expectedMove;
    lowerEM = close[1] - expectedMove;
} else {
    lastImpliedVolatility = lastImpliedVolatility[1];
	lastWeekClose = lastWeekClose[1];

    expectedMove = expectedMove[1];
	hasTOSExpectedMove = hasTOSExpectedMove[1];

    upperEM = upperEM[1];
    lowerEM = lowerEM[1];
}

# Plot EMs

plot TOSUpperEM = if hasTOSExpectedMove and upperEM >= 1 then upperEM else Double.NaN;

TOSUpperEM.SetDefaultColor(Color.CYAN);
TOSUpperEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
TOSUpperEM.SetLineWeight(1);

plot TOSLowerEM = if hasTOSExpectedMove and lowerEM >= 1 then lowerEM else Double.NaN;

TOSLowerEM.SetDefaultColor(Color.CYAN);
TOSLowerEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
TOSLowerEM.SetLineWeight(1);

plot TOSCloseEM = if hasTOSExpectedMove and lastWeekClose >= 1 then lastWeekClose else Double.NaN;

TOSCloseEM.SetDefaultColor(Color.CYAN);
TOSCloseEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
TOSCloseEM.SetLineWeight(1);

plot AutoUpperEM = if hasTOSExpectedMove == no and upperEM >= 1 then upperEM else Double.NaN;

AutoUpperEM.SetDefaultColor(Color.VIOLET);
AutoUpperEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AutoUpperEM.SetLineWeight(1);

plot AutoCloseEM = if hasTOSExpectedMove == no and lastWeekClose >= 1 then lastWeekClose else Double.NaN;

AutoCloseEM.SetDefaultColor(Color.VIOLET);
AutoCloseEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AutoCloseEM.SetLineWeight(1);

plot AutoLowerEM = if hasTOSExpectedMove == no and lowerEM >= 1 then lowerEM else Double.NaN;

AutoLowerEM.SetDefaultColor(Color.VIOLET);
AutoLowerEM.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AutoLowerEM.SetLineWeight(1);
