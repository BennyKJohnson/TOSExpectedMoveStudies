# TOS+Auto Weekly Expected Move 
# Author: Benny33
# Date: 09-14-2023
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
    else if date == 20230417 then 3.84
    else if date == 20230424 then 4.119
    else if date == 20230501 then 7.076
    else if date == 20230508 then 5.266
    else if date == 20230515 then 3.867
    else if date == 20230522 then 3.742
    else if date == 20230530 then 4.299
    else if date == 20230605 then 5.897
    else if date == 20230612 then 4.35
    else if date == 20230620 then 3.682
    else if date == 20230626 then 3.802
    else if date == 20230703 then 3.811
    else if date == 20230710 then 3.877
    else if date == 20230717 then 3.436
    else if date == 20230724 then 4.843
    else if date == 20230731 then 7.172
    else if date == 20230807 then 5.263
    else if date == 20230814 then 4.267
    else if date == 20230821 then 4.486
    else if date == 20230828 then 3.985
    else if date == 20230905 then 3.482
    else if date == 20230911 then 5.865
else 0;

def abbvExpectedMove =
 if date == 20230313 then 4.574
    else if date == 20230320 then 4.61
    else if date == 20230327 then 4.144
    else if date == 20230403 then 2.994
    else if date == 20230410 then 3.699
    else if date == 20230417 then 2.998
    else if date == 20230424 then 5.073
    else if date == 20230501 then 3.048
    else if date == 20230508 then 3.338
    else if date == 20230515 then 2.818
    else if date == 20230522 then 2.927
    else if date == 20230530 then 3.223
    else if date == 20230605 then 2.72
    else if date == 20230612 then 3.041
    else if date == 20230620 then 2.623
    else if date == 20230626 then 2.834
    else if date == 20230703 then 2.3
    else if date == 20230710 then 3.197
    else if date == 20230717 then 2.944
    else if date == 20230724 then 6.126
    else if date == 20230731 then 2.874
    else if date == 20230807 then 3.09
    else if date == 20230814 then 2.961
    else if date == 20230821 then 3.029
    else if date == 20230828 then 2.877
    else if date == 20230905 then 2.361
    else if date == 20230911 then 2.76
else 0;

def abtExpectedMove =
 if date == 20230313 then 3.378
    else if date == 20230320 then 3.585
    else if date == 20230327 then 3.224
    else if date == 20230403 then 1.978
    else if date == 20230410 then 2.418
    else if date == 20230417 then 3.851
    else if date == 20230424 then 2.178
    else if date == 20230501 then 1.981
    else if date == 20230508 then 2.254
    else if date == 20230515 then 2.12
    else if date == 20230522 then 2.285
    else if date == 20230530 then 2.39
    else if date == 20230605 then 1.959
    else if date == 20230612 then 2.148
    else if date == 20230620 then 1.711
    else if date == 20230626 then 2.047
    else if date == 20230703 then 1.53
    else if date == 20230710 then 2.124
    else if date == 20230717 then 3.641
    else if date == 20230724 then 2.638
    else if date == 20230731 then 1.765
    else if date == 20230807 then 2.462
    else if date == 20230814 then 2.516
    else if date == 20230821 then 2.646
    else if date == 20230828 then 2.303
    else if date == 20230905 then 1.769
    else if date == 20230911 then 2.188
else 0;

def acnExpectedMove =
 if date == 20230313 then 9.804
    else if date == 20230320 then 14.089
    else if date == 20230327 then 9.502
    else if date == 20230403 then 6.198
    else if date == 20230410 then 7.594
    else if date == 20230417 then 6.68
    else if date == 20230424 then 5.931
    else if date == 20230501 then 6.797
    else if date == 20230508 then 7.398
    else if date == 20230515 then 6.445
    else if date == 20230522 then 6.583
    else if date == 20230530 then 9.037
    else if date == 20230605 then 8.218
    else if date == 20230612 then 8.532
    else if date == 20230620 then 14.246
    else if date == 20230626 then 6.578
    else if date == 20230703 then 5.837
    else if date == 20230710 then 6.959
    else if date == 20230717 then 6.509
    else if date == 20230724 then 7.484
    else if date == 20230731 then 6.529
    else if date == 20230807 then 8.097
    else if date == 20230814 then 7.801
    else if date == 20230821 then 7.776
    else if date == 20230828 then 7.323
    else if date == 20230905 then 5.125
    else if date == 20230911 then 6.876
else 0;

def adbeExpectedMove =
 if date == 20230313 then 23.975
    else if date == 20230320 then 17.222
    else if date == 20230327 then 14.367
    else if date == 20230403 then 10.36
    else if date == 20230410 then 12.341
    else if date == 20230417 then 10.017
    else if date == 20230424 then 10.495
    else if date == 20230501 then 11.175
    else if date == 20230508 then 11.269
    else if date == 20230515 then 10.908
    else if date == 20230522 then 11.878
    else if date == 20230530 then 18.435
    else if date == 20230605 then 13.856
    else if date == 20230612 then 36.032
    else if date == 20230620 then 19.407
    else if date == 20230626 then 14.562
    else if date == 20230703 then 13.53
    else if date == 20230710 then 14.563
    else if date == 20230717 then 16.776
    else if date == 20230724 then 18.929
    else if date == 20230731 then 16.32
    else if date == 20230807 then 19.671
    else if date == 20230814 then 16.732
    else if date == 20230821 then 19.863
    else if date == 20230828 then 18.112
    else if date == 20230905 then 15.434
    else if date == 20230911 then 34.642
else 0;

def aigExpectedMove =
 if date == 20230313 then 2.853
    else if date == 20230320 then 3.779
    else if date == 20230327 then 2.602
    else if date == 20230403 then 1.425
    else if date == 20230410 then 1.63
    else if date == 20230417 then 1.611
    else if date == 20230424 then 1.58
    else if date == 20230501 then 2.212
    else if date == 20230508 then 2.293
    else if date == 20230515 then 1.712
    else if date == 20230522 then 1.722
    else if date == 20230530 then 1.735
    else if date == 20230605 then 1.46
    else if date == 20230612 then 1.553
    else if date == 20230620 then 1.364
    else if date == 20230626 then 1.375
    else if date == 20230703 then 1.148
    else if date == 20230710 then 1.379
    else if date == 20230717 then 1.423
    else if date == 20230724 then 1.496
    else if date == 20230731 then 2.245
    else if date == 20230807 then 1.454
    else if date == 20230814 then 1.381
    else if date == 20230821 then 1.485
    else if date == 20230828 then 1.383
    else if date == 20230905 then 1.066
    else if date == 20230911 then 1.18
else 0;

def amdExpectedMove =
 if date == 20230313 then 5.335
    else if date == 20230320 then 6.627
    else if date == 20230327 then 5.844
    else if date == 20230403 then 4.144
    else if date == 20230410 then 4.55
    else if date == 20230417 then 3.945
    else if date == 20230424 then 3.982
    else if date == 20230501 then 6.744
    else if date == 20230508 then 4.032
    else if date == 20230515 then 3.98
    else if date == 20230522 then 5.021
    else if date == 20230530 then 7.207
    else if date == 20230605 then 5.589
    else if date == 20230612 then 10.839
    else if date == 20230620 then 6.047
    else if date == 20230626 then 5.396
    else if date == 20230703 then 4.352
    else if date == 20230710 then 4.792
    else if date == 20230717 then 5.839
    else if date == 20230724 then 5.858
    else if date == 20230731 then 9.039
    else if date == 20230807 then 5.767
    else if date == 20230814 then 5.039
    else if date == 20230821 then 6.086
    else if date == 20230828 then 4.97
    else if date == 20230905 then 4.131
    else if date == 20230911 then 4.573
else 0;

def amgnExpectedMove =
 if date == 20230313 then 6.528
    else if date == 20230320 then 7.325
    else if date == 20230327 then 6.889
    else if date == 20230403 then 4.768
    else if date == 20230410 then 4.995
    else if date == 20230417 then 4.939
    else if date == 20230424 then 8.334
    else if date == 20230501 then 5.26
    else if date == 20230508 then 5.17
    else if date == 20230515 then 6.073
    else if date == 20230522 then 5.252
    else if date == 20230530 then 5.448
    else if date == 20230605 then 5.394
    else if date == 20230612 then 5.641
    else if date == 20230620 then 5.751
    else if date == 20230626 then 1.275
    else if date == 20230703 then 4.567
    else if date == 20230710 then 5.713
    else if date == 20230717 then 5.626
    else if date == 20230724 then 6.236
    else if date == 20230731 then 7.952
    else if date == 20230807 then 6.41
    else if date == 20230814 then 6.193
    else if date == 20230821 then 6.242
    else if date == 20230828 then 5.588
    else if date == 20230905 then 5.301
    else if date == 20230911 then 5.713
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
    else if date == 20230417 then 3.407
    else if date == 20230424 then 7.691
    else if date == 20230501 then 4.139
    else if date == 20230508 then 3.344
    else if date == 20230515 then 3.51
    else if date == 20230522 then 3.913
    else if date == 20230530 then 4.414
    else if date == 20230605 then 4.129
    else if date == 20230612 then 4.708
    else if date == 20230620 then 3.974
    else if date == 20230626 then 4.576
    else if date == 20230703 then 3.35
    else if date == 20230710 then 4.042
    else if date == 20230717 then 4.505
    else if date == 20230724 then 5.343
    else if date == 20230731 then 8.035
    else if date == 20230807 then 5.07
    else if date == 20230814 then 4.361
    else if date == 20230821 then 4.805
    else if date == 20230828 then 4.01
    else if date == 20230905 then 3.336
    else if date == 20230911 then 3.828
else 0;

def avgoExpectedMove =
 if date == 20230313 then 24.952
    else if date == 20230320 then 24.698
    else if date == 20230327 then 20.133
    else if date == 20230403 then 14.817
    else if date == 20230410 then 17.852
    else if date == 20230417 then 15.479
    else if date == 20230424 then 15.212
    else if date == 20230501 then 17.479
    else if date == 20230508 then 15.66
    else if date == 20230515 then 15.922
    else if date == 20230522 then 19.142
    else if date == 20230530 then 65.93
    else if date == 20230605 then 32.129
    else if date == 20230612 then 28.623
    else if date == 20230620 then 32.8
    else if date == 20230626 then 22.775
    else if date == 20230703 then 21.663
    else if date == 20230710 then 23.606
    else if date == 20230717 then 25.002
    else if date == 20230724 then 32.724
    else if date == 20230731 then 25.858
    else if date == 20230807 then 24.145
    else if date == 20230814 then 27.722
    else if date == 20230821 then 34.496
    else if date == 20230828 then 66.051
    else if date == 20230905 then 23.812
    else if date == 20230911 then 24.6
else 0;

def axpExpectedMove =
 if date == 20230313 then 7.382
    else if date == 20230320 then 8.432
    else if date == 20230327 then 6.998
    else if date == 20230403 then 4.461
    else if date == 20230410 then 5.653
    else if date == 20230417 then 7.405
    else if date == 20230424 then 4.313
    else if date == 20230501 then 4.489
    else if date == 20230508 then 4.907
    else if date == 20230515 then 4.677
    else if date == 20230522 then 4.777
    else if date == 20230530 then 4.566
    else if date == 20230605 then 4.708
    else if date == 20230612 then 4.685
    else if date == 20230620 then 4.19
    else if date == 20230626 then 4.098
    else if date == 20230703 then 3.463
    else if date == 20230710 then 4.317
    else if date == 20230717 then 6.609
    else if date == 20230724 then 4.591
    else if date == 20230731 then 3.504
    else if date == 20230807 then 3.987
    else if date == 20230814 then 3.79
    else if date == 20230821 then 4.117
    else if date == 20230828 then 3.812
    else if date == 20230905 then 2.944
    else if date == 20230911 then 3.341
else 0;

def baExpectedMove =
 if date == 20230313 then 9.555
    else if date == 20230320 then 9.909
    else if date == 20230327 then 8.189
    else if date == 20230403 then 6.234
    else if date == 20230410 then 7.409
    else if date == 20230417 then 5.935
    else if date == 20230424 then 9.816
    else if date == 20230501 then 6.086
    else if date == 20230508 then 6.456
    else if date == 20230515 then 6.253
    else if date == 20230522 then 6.523
    else if date == 20230530 then 6.801
    else if date == 20230605 then 6.212
    else if date == 20230612 then 6.903
    else if date == 20230620 then 7.689
    else if date == 20230626 then 6.823
    else if date == 20230703 then 4.932
    else if date == 20230710 then 6.174
    else if date == 20230717 then 6.855
    else if date == 20230724 then 10.774
    else if date == 20230731 then 6.773
    else if date == 20230807 then 6.771
    else if date == 20230814 then 6.793
    else if date == 20230821 then 6.786
    else if date == 20230828 then 6.923
    else if date == 20230905 then 5.833
    else if date == 20230911 then 5.841
else 0;

def bacExpectedMove =
 if date == 20230313 then 2.099
    else if date == 20230320 then 2.212
    else if date == 20230327 then 1.499
    else if date == 20230403 then 0.931
    else if date == 20230410 then 1.2
    else if date == 20230417 then 1.634
    else if date == 20230424 then 0.864
    else if date == 20230501 then 0.926
    else if date == 20230508 then 1.105
    else if date == 20230515 then 0.99
    else if date == 20230522 then 1.006
    else if date == 20230530 then 0.949
    else if date == 20230605 then 0.887
    else if date == 20230612 then 0.951
    else if date == 20230620 then 0.705
    else if date == 20230626 then 0.866
    else if date == 20230703 then 0.638
    else if date == 20230710 then 0.83
    else if date == 20230717 then 1.339
    else if date == 20230724 then 0.881
    else if date == 20230731 then 0.76
    else if date == 20230807 then 0.857
    else if date == 20230814 then 0.801
    else if date == 20230821 then 0.892
    else if date == 20230828 then 0.827
    else if date == 20230905 then 0.582
    else if date == 20230911 then 0.707
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
    else if date == 20230417 then 64.209
    else if date == 20230424 then 61.485
    else if date == 20230501 then 138.369
    else if date == 20230508 then 89.015
    else if date == 20230515 then 70.679
    else if date == 20230522 then 73.329
    else if date == 20230530 then 81.269
    else if date == 20230605 then 71.903
    else if date == 20230612 then 79.358
    else if date == 20230620 then 70.314
    else if date == 20230626 then 68.935
    else if date == 20230703 then 60.114
    else if date == 20230710 then 62.885
    else if date == 20230717 then 73.838
    else if date == 20230724 then 81.656
    else if date == 20230731 then 171.714
    else if date == 20230807 then 106.532
    else if date == 20230814 then 95.944
    else if date == 20230821 then 95.293
    else if date == 20230828 then 86.49
    else if date == 20230905 then 69.55
    else if date == 20230911 then 80.683
else 0;

def blkExpectedMove =
 if date == 20230313 then 32.472
    else if date == 20230320 then 30.552
    else if date == 20230327 then 27.788
    else if date == 20230403 then 16.985
    else if date == 20230410 then 28.49
    else if date == 20230417 then 16.357
    else if date == 20230424 then 18.432
    else if date == 20230501 then 16.899
    else if date == 20230508 then 19.323
    else if date == 20230515 then 16.307
    else if date == 20230522 then 19.81
    else if date == 20230530 then 20.069
    else if date == 20230605 then 16.791
    else if date == 20230612 then 17.465
    else if date == 20230620 then 17.745
    else if date == 20230626 then 15.249
    else if date == 20230703 then 13.148
    else if date == 20230710 then 26.428
    else if date == 20230717 then 18.66
    else if date == 20230724 then 18.341
    else if date == 20230731 then 16.139
    else if date == 20230807 then 17.702
    else if date == 20230814 then 17.034
    else if date == 20230821 then 17.049
    else if date == 20230828 then 15.9
    else if date == 20230905 then 13.316
    else if date == 20230911 then 13.788
else 0;

def bmyExpectedMove =
 if date == 20230313 then 2.298
    else if date == 20230320 then 2.435
    else if date == 20230327 then 1.764
    else if date == 20230403 then 1.409
    else if date == 20230410 then 1.471
    else if date == 20230417 then 1.347
    else if date == 20230424 then 1.964
    else if date == 20230501 then 1.438
    else if date == 20230508 then 1.498
    else if date == 20230515 then 1.711
    else if date == 20230522 then 1.523
    else if date == 20230530 then 1.657
    else if date == 20230605 then 1.237
    else if date == 20230612 then 1.509
    else if date == 20230620 then 1.24
    else if date == 20230626 then 1.357
    else if date == 20230703 then 1.218
    else if date == 20230710 then 1.357
    else if date == 20230717 then 1.33
    else if date == 20230724 then 1.993
    else if date == 20230731 then 1.222
    else if date == 20230807 then 1.312
    else if date == 20230814 then 1.335
    else if date == 20230821 then 1.33
    else if date == 20230828 then 1.411
    else if date == 20230905 then 1.007
    else if date == 20230911 then 1.641
else 0;

def brkbExpectedMove =
 if date == 20230313 then 10.522
    else if date == 20230320 then 11.101
    else if date == 20230327 then 8.556
    else if date == 20230403 then 5.066
    else if date == 20230410 then 6.529
    else if date == 20230417 then 5.626
    else if date == 20230424 then 4.913
    else if date == 20230501 then 5.991
    else if date == 20230508 then 7.497
    else if date == 20230515 then 5.694
    else if date == 20230522 then 5.863
    else if date == 20230530 then 6.382
    else if date == 20230605 then 5.147
    else if date == 20230612 then 5.295
    else if date == 20230620 then 4.351
    else if date == 20230626 then 4.77
    else if date == 20230703 then 3.771
    else if date == 20230710 then 4.827
    else if date == 20230717 then 4.957
    else if date == 20230724 then 5.233
    else if date == 20230731 then 3.146
    else if date == 20230807 then 7.937
    else if date == 20230814 then 5.911
    else if date == 20230821 then 6.584
    else if date == 20230828 then 5.778
    else if date == 20230905 then 4.406
    else if date == 20230911 then 5.366
else 0;

def cExpectedMove =
 if date == 20230313 then 2.802
    else if date == 20230320 then 3.518
    else if date == 20230327 then 2.422
    else if date == 20230403 then 1.375
    else if date == 20230410 then 2.29
    else if date == 20230417 then 1.482
    else if date == 20230424 then 1.489
    else if date == 20230501 then 1.397
    else if date == 20230508 then 1.753
    else if date == 20230515 then 1.546
    else if date == 20230522 then 1.644
    else if date == 20230530 then 1.444
    else if date == 20230605 then 1.286
    else if date == 20230612 then 1.523
    else if date == 20230620 then 1.105
    else if date == 20230626 then 1.448
    else if date == 20230703 then 1.018
    else if date == 20230710 then 1.898
    else if date == 20230717 then 1.291
    else if date == 20230724 then 1.298
    else if date == 20230731 then 1.247
    else if date == 20230807 then 1.263
    else if date == 20230814 then 1.107
    else if date == 20230821 then 1.289
    else if date == 20230828 then 1.175
    else if date == 20230905 then 0.83
else 0;

def catExpectedMove =
 if date == 20230313 then 10.431
    else if date == 20230320 then 10.135
    else if date == 20230327 then 9.057
    else if date == 20230403 then 6.09
    else if date == 20230410 then 7.358
    else if date == 20230417 then 7.164
    else if date == 20230424 then 10.93
    else if date == 20230501 then 6.677
    else if date == 20230508 then 6.608
    else if date == 20230515 then 6.571
    else if date == 20230522 then 7.015
    else if date == 20230530 then 6.518
    else if date == 20230605 then 8.057
    else if date == 20230612 then 8.401
    else if date == 20230620 then 6.556
    else if date == 20230626 then 6.334
    else if date == 20230703 then 5.286
    else if date == 20230710 then 6.334
    else if date == 20230717 then 6.756
    else if date == 20230724 then 7.347
    else if date == 20230731 then 11.669
    else if date == 20230807 then 7.802
    else if date == 20230814 then 7.719
    else if date == 20230821 then 7.855
    else if date == 20230828 then 6.787
    else if date == 20230905 then 5.648
else 0;

def chtrExpectedMove =
 if date == 20230313 then 18.255
    else if date == 20230320 then 19.459
    else if date == 20230327 then 17.753
    else if date == 20230403 then 12.228
    else if date == 20230410 then 15.337
    else if date == 20230417 then 13.627
    else if date == 20230424 then 24.241
    else if date == 20230501 then 13.189
    else if date == 20230508 then 8.426
    else if date == 20230515 then 12.285
    else if date == 20230522 then 12.964
    else if date == 20230530 then 12.894
    else if date == 20230605 then 11.225
    else if date == 20230612 then 14.166
    else if date == 20230620 then 13.524
    else if date == 20230626 then 12.542
    else if date == 20230703 then 10.888
    else if date == 20230710 then 12.241
    else if date == 20230717 then 11.348
    else if date == 20230724 then 27.554
    else if date == 20230731 then 12.136
    else if date == 20230807 then 13.123
    else if date == 20230814 then 13.102
    else if date == 20230821 then 13.224
    else if date == 20230828 then 11.608
    else if date == 20230905 then 13.691
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
    else if date == 20230417 then 1.174
    else if date == 20230424 then 1.835
    else if date == 20230501 then 1.008
    else if date == 20230508 then 0.978
    else if date == 20230515 then 1.029
    else if date == 20230522 then 1.088
    else if date == 20230530 then 1.11
    else if date == 20230605 then 1.172
    else if date == 20230612 then 1.189
    else if date == 20230620 then 0.984
    else if date == 20230626 then 1.069
    else if date == 20230703 then 1.318
    else if date == 20230710 then 0.884
    else if date == 20230717 then 0.847
    else if date == 20230724 then 2.505
    else if date == 20230731 then 1.017
    else if date == 20230807 then 1.09
    else if date == 20230814 then 1.059
    else if date == 20230821 then 1.214
    else if date == 20230828 then 0.984
    else if date == 20230905 then 0.916
else 0;

def cofExpectedMove =
 if date == 20230313 then 5.717
    else if date == 20230320 then 6.812
    else if date == 20230327 then 5.75
    else if date == 20230403 then 3.305
    else if date == 20230410 then 4.166
    else if date == 20230417 then 4.164
    else if date == 20230424 then 6.139
    else if date == 20230501 then 3.854
    else if date == 20230508 then 4.332
    else if date == 20230515 then 3.594
    else if date == 20230522 then 4.216
    else if date == 20230530 then 4.019
    else if date == 20230605 then 3.994
    else if date == 20230612 then 3.821
    else if date == 20230620 then 3.29
    else if date == 20230626 then 3.423
    else if date == 20230703 then 2.761
    else if date == 20230710 then 3.43
    else if date == 20230717 then 5.772
    else if date == 20230724 then 3.831
    else if date == 20230731 then 3.129
    else if date == 20230807 then 3.263
    else if date == 20230814 then 3.338
    else if date == 20230821 then 3.461
    else if date == 20230828 then 3.049
    else if date == 20230905 then 2.348
else 0;

def copExpectedMove =
 if date == 20230313 then 4.921
    else if date == 20230320 then 5.766
    else if date == 20230327 then 4.661
    else if date == 20230403 then 3.294
    else if date == 20230410 then 4.3
    else if date == 20230417 then 3.107
    else if date == 20230424 then 3.35
    else if date == 20230501 then 4.353
    else if date == 20230508 then 3.767
    else if date == 20230515 then 3.811
    else if date == 20230522 then 3.638
    else if date == 20230530 then 3.736
    else if date == 20230605 then 4.345
    else if date == 20230612 then 3.622
    else if date == 20230620 then 3.007
    else if date == 20230626 then 3.056
    else if date == 20230703 then 2.418
    else if date == 20230710 then 2.946
    else if date == 20230717 then 3.223
    else if date == 20230724 then 3.187
    else if date == 20230731 then 4.087
    else if date == 20230807 then 3.257
    else if date == 20230814 then 3.268
    else if date == 20230821 then 3.401
    else if date == 20230828 then 2.897
    else if date == 20230905 then 2.344
else 0;

def costExpectedMove =
 if date == 20230313 then 16.57
    else if date == 20230320 then 16.313
    else if date == 20230327 then 12.335
    else if date == 20230403 then 10.78
    else if date == 20230410 then 12.221
    else if date == 20230417 then 9.815
    else if date == 20230424 then 9.873
    else if date == 20230501 then 11.738
    else if date == 20230508 then 9.757
    else if date == 20230515 then 11.014
    else if date == 20230522 then 16.656
    else if date == 20230530 then 12.357
    else if date == 20230605 then 10.392
    else if date == 20230612 then 11.19
    else if date == 20230620 then 9.031
    else if date == 20230626 then 4.76
    else if date == 20230703 then 8.35
    else if date == 20230710 then 9.645
    else if date == 20230717 then 9.183
    else if date == 20230724 then 10.208
    else if date == 20230731 then 10.777
    else if date == 20230807 then 11.059
    else if date == 20230814 then 10.978
    else if date == 20230821 then 12.561
    else if date == 20230828 then 10.602
    else if date == 20230905 then 8.294
else 0;

def crmExpectedMove =
 if date == 20230313 then 8.852
    else if date == 20230320 then 8.178
    else if date == 20230327 then 7.213
    else if date == 20230403 then 5.482
    else if date == 20230410 then 6.373
    else if date == 20230417 then 4.287
    else if date == 20230424 then 5.873
    else if date == 20230501 then 5.98
    else if date == 20230508 then 5.858
    else if date == 20230515 then 5.768
    else if date == 20230522 then 6.353
    else if date == 20230530 then 18.794
    else if date == 20230605 then 6.982
    else if date == 20230612 then 10.087
    else if date == 20230620 then 6.31
    else if date == 20230626 then 6.198
    else if date == 20230703 then 4.833
    else if date == 20230710 then 6.193
    else if date == 20230717 then 6.763
    else if date == 20230724 then 7.713
    else if date == 20230731 then 6.42
    else if date == 20230807 then 6.867
    else if date == 20230814 then 6.558
    else if date == 20230821 then 6.924
    else if date == 20230828 then 15.586
    else if date == 20230905 then 5.303
else 0;

def cscoExpectedMove =
 if date == 20230313 then 1.592
    else if date == 20230320 then 1.57
    else if date == 20230327 then 1.306
    else if date == 20230403 then 0.958
    else if date == 20230410 then 1.163
    else if date == 20230417 then 1.022
    else if date == 20230424 then 1.113
    else if date == 20230501 then 1.003
    else if date == 20230508 then 0.989
    else if date == 20230515 then 2.453
    else if date == 20230522 then 1.091
    else if date == 20230530 then 1.191
    else if date == 20230605 then 1.097
    else if date == 20230612 then 0.95
    else if date == 20230620 then 0.875
    else if date == 20230626 then 0.945
    else if date == 20230703 then 0.757
    else if date == 20230710 then 0.856
    else if date == 20230717 then 1.099
    else if date == 20230724 then 1.188
    else if date == 20230731 then 0.948
    else if date == 20230807 then 1.197
    else if date == 20230814 then 2.607
    else if date == 20230821 then 1.29
    else if date == 20230828 then 1.076
    else if date == 20230905 then 0.883
else 0;

def cvsExpectedMove =
 if date == 20230313 then 2.675
    else if date == 20230320 then 2.777
    else if date == 20230327 then 2.292
    else if date == 20230403 then 1.8
    else if date == 20230410 then 2.061
    else if date == 20230417 then 2.178
    else if date == 20230424 then 1.867
    else if date == 20230501 then 3.578
    else if date == 20230508 then 2.138
    else if date == 20230515 then 1.913
    else if date == 20230522 then 1.922
    else if date == 20230530 then 1.935
    else if date == 20230605 then 1.82
    else if date == 20230612 then 1.942
    else if date == 20230620 then 1.81
    else if date == 20230626 then 1.716
    else if date == 20230703 then 1.381
    else if date == 20230710 then 1.807
    else if date == 20230717 then 1.858
    else if date == 20230724 then 1.861
    else if date == 20230731 then 3.301
    else if date == 20230807 then 2.007
    else if date == 20230814 then 1.743
    else if date == 20230821 then 2.169
    else if date == 20230828 then 1.638
    else if date == 20230905 then 1.355
else 0;

def cvxExpectedMove =
 if date == 20230313 then 5.933
    else if date == 20230320 then 7.348
    else if date == 20230327 then 5.708
    else if date == 20230403 then 3.952
    else if date == 20230410 then 4.548
    else if date == 20230417 then 4.743
    else if date == 20230424 then 5.188
    else if date == 20230501 then 3.935
    else if date == 20230508 then 4.28
    else if date == 20230515 then 4.459
    else if date == 20230522 then 4.225
    else if date == 20230530 then 4.39
    else if date == 20230605 then 5.414
    else if date == 20230612 then 4.296
    else if date == 20230620 then 3.688
    else if date == 20230626 then 3.456
    else if date == 20230703 then 2.918
    else if date == 20230710 then 3.521
    else if date == 20230717 then 3.811
    else if date == 20230724 then 4.7
    else if date == 20230731 then 3.648
    else if date == 20230807 then 4.093
else 0;

def dhrExpectedMove =
 if date == 20230313 then 9.895
    else if date == 20230320 then 9.989
    else if date == 20230327 then 8.073
    else if date == 20230403 then 5.165
    else if date == 20230410 then 6.726
    else if date == 20230417 then 3.416
    else if date == 20230424 then 10.845
    else if date == 20230501 then 5.635
    else if date == 20230508 then 6.67
    else if date == 20230515 then 5.83
    else if date == 20230522 then 6.01
    else if date == 20230530 then 5.841
    else if date == 20230605 then 5.401
    else if date == 20230612 then 6.049
    else if date == 20230620 then 5.046
    else if date == 20230626 then 5.407
    else if date == 20230703 then 4.744
    else if date == 20230710 then 5.779
    else if date == 20230717 then 6.206
    else if date == 20230724 then 12.317
    else if date == 20230731 then 5.406
    else if date == 20230807 then 6.271
    else if date == 20230814 then 6.065
    else if date == 20230821 then 6.503
    else if date == 20230828 then 5.955
    else if date == 20230905 then 5.138
else 0;

def disExpectedMove =
 if date == 20230313 then 4.226
    else if date == 20230320 then 4.163
    else if date == 20230327 then 3.566
    else if date == 20230403 then 2.76
    else if date == 20230410 then 3.198
    else if date == 20230417 then 2.65
    else if date == 20230424 then 2.766
    else if date == 20230501 then 2.969
    else if date == 20230508 then 6.277
    else if date == 20230515 then 2.619
    else if date == 20230522 then 2.644
    else if date == 20230530 then 2.806
    else if date == 20230605 then 2.418
    else if date == 20230612 then 2.637
    else if date == 20230620 then 2.53
    else if date == 20230626 then 2.112
    else if date == 20230703 then 1.841
    else if date == 20230710 then 2.201
    else if date == 20230717 then 2.72
    else if date == 20230724 then 2.597
    else if date == 20230731 then 2.279
    else if date == 20230807 then 5.256
    else if date == 20230814 then 2.589
    else if date == 20230821 then 2.462
    else if date == 20230828 then 2.199
    else if date == 20230905 then 2.385
else 0;

def dowExpectedMove =
 if date == 20230313 then 2.369
    else if date == 20230320 then 2.656
    else if date == 20230327 then 2.019
    else if date == 20230403 then 1.423
    else if date == 20230410 then 1.685
    else if date == 20230417 then 1.445
    else if date == 20230424 then 2.094
    else if date == 20230501 then 1.618
    else if date == 20230508 then 1.68
    else if date == 20230515 then 1.918
    else if date == 20230522 then 1.558
    else if date == 20230530 then 1.537
    else if date == 20230605 then 1.368
    else if date == 20230612 then 1.564
    else if date == 20230620 then 1.332
    else if date == 20230626 then 1.332
    else if date == 20230703 then 1.023
    else if date == 20230710 then 1.287
    else if date == 20230717 then 1.278
    else if date == 20230724 then 2.088
    else if date == 20230731 then 1.234
    else if date == 20230807 then 1.485
    else if date == 20230814 then 1.376
    else if date == 20230821 then 1.484
    else if date == 20230828 then 1.442
    else if date == 20230905 then 0.951
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
    else if date == 20230417 then 0.685
    else if date == 20230424 then 0.574
    else if date == 20230501 then 0.684
    else if date == 20230508 then 0.614
    else if date == 20230515 then 0.617
    else if date == 20230522 then 0.647
    else if date == 20230530 then 0.704
    else if date == 20230605 then 0.794
    else if date == 20230612 then 0.67
    else if date == 20230620 then 0.701
    else if date == 20230626 then 0.651
    else if date == 20230703 then 0.58
    else if date == 20230710 then 0.782
    else if date == 20230717 then 0.784
    else if date == 20230724 then 0.825
    else if date == 20230731 then 0.807
    else if date == 20230807 then 0.831
    else if date == 20230814 then 0.888
    else if date == 20230821 then 0.873
    else if date == 20230828 then 0.804
    else if date == 20230905 then 0.63
    else if date == 20230911 then 0.64
else 0;

def emrExpectedMove =
 if date == 20230313 then 3.011
    else if date == 20230320 then 3.245
    else if date == 20230327 then 2.649
    else if date == 20230403 then 2.607
    else if date == 20230410 then 3.78
    else if date == 20230417 then 2.356
    else if date == 20230424 then 2.122
    else if date == 20230501 then 2.788
    else if date == 20230508 then 1.748
    else if date == 20230515 then 2.014
    else if date == 20230522 then 2.052
    else if date == 20230530 then 1.965
    else if date == 20230605 then 1.426
    else if date == 20230612 then 1.968
    else if date == 20230620 then 1.671
    else if date == 20230626 then 1.75
    else if date == 20230703 then 1.419
    else if date == 20230710 then 1.767
    else if date == 20230717 then 1.398
    else if date == 20230724 then 1.844
    else if date == 20230731 then 2.753
    else if date == 20230807 then 1.715
    else if date == 20230814 then 1.796
    else if date == 20230821 then 1.927
    else if date == 20230828 then 1.733
    else if date == 20230905 then 1.293
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
    else if date == 20230417 then 0.337
    else if date == 20230424 then 0.564
    else if date == 20230501 then 0.757
    else if date == 20230508 then 0.492
    else if date == 20230515 then 0.458
    else if date == 20230522 then 0.521
    else if date == 20230530 then 0.519
    else if date == 20230605 then 0.232
    else if date == 20230612 then 0.579
    else if date == 20230620 then 0.499
    else if date == 20230626 then 0.498
    else if date == 20230703 then 0.482
    else if date == 20230710 then 0.535
    else if date == 20230717 then 0.509
    else if date == 20230724 then 0.872
    else if date == 20230731 then 0.52
    else if date == 20230807 then 0.443
    else if date == 20230814 then 0.53
    else if date == 20230821 then 0.489
    else if date == 20230828 then 0.415
    else if date == 20230905 then 0.355
else 0;

def fdxExpectedMove =
 if date == 20230313 then 12.816
    else if date == 20230320 then 10.015
    else if date == 20230327 then 8.039
    else if date == 20230403 then 7.474
    else if date == 20230410 then 6.97
    else if date == 20230417 then 5.17
    else if date == 20230424 then 5.707
    else if date == 20230501 then 5.578
    else if date == 20230508 then 5.396
    else if date == 20230515 then 5.951
    else if date == 20230522 then 6.266
    else if date == 20230530 then 5.932
    else if date == 20230605 then 6.233
    else if date == 20230612 then 6.621
    else if date == 20230620 then 15.737
    else if date == 20230626 then 5.031
    else if date == 20230703 then 6.013
    else if date == 20230710 then 6.153
    else if date == 20230717 then 5.165
    else if date == 20230724 then 6.663
    else if date == 20230731 then 6.423
    else if date == 20230807 then 8.058
    else if date == 20230814 then 7.499
    else if date == 20230821 then 7.443
    else if date == 20230828 then 6.736
    else if date == 20230905 then 5.817
else 0;

def fxiExpectedMove =
 if date == 20230313 then 1.188
    else if date == 20230320 then 1.168
    else if date == 20230327 then 1.1
    else if date == 20230403 then 0.936
    else if date == 20230410 then 1.0
    else if date == 20230417 then 0.88
    else if date == 20230424 then 0.844
    else if date == 20230501 then 0.852
    else if date == 20230508 then 0.979
    else if date == 20230515 then 0.863
    else if date == 20230522 then 0.859
    else if date == 20230530 then 0.916
    else if date == 20230605 then 0.963
    else if date == 20230612 then 0.89
    else if date == 20230620 then 0.917
    else if date == 20230626 then 0.871
    else if date == 20230703 then 0.785
    else if date == 20230710 then 0.893
    else if date == 20230717 then 0.813
    else if date == 20230724 then 0.966
    else if date == 20230731 then 1.202
    else if date == 20230807 then 1.112
    else if date == 20230814 then 1.041
    else if date == 20230821 then 1.139
    else if date == 20230828 then 0.976
    else if date == 20230905 then 0.913
    else if date == 20230911 then 0.801
else 0;

def gdExpectedMove =
 if date == 20230313 then 6.718
    else if date == 20230320 then 6.918
    else if date == 20230327 then 6.03
    else if date == 20230403 then 3.752
    else if date == 20230410 then 4.935
    else if date == 20230417 then 4.089
    else if date == 20230424 then 6.347
    else if date == 20230501 then 4.089
    else if date == 20230508 then 4.249
    else if date == 20230515 then 4.466
    else if date == 20230522 then 4.333
    else if date == 20230530 then 4.821
    else if date == 20230605 then 4.277
    else if date == 20230612 then 4.404
    else if date == 20230620 then 3.316
    else if date == 20230626 then 3.806
    else if date == 20230703 then 3.393
    else if date == 20230710 then 3.753
    else if date == 20230717 then 2.74
    else if date == 20230724 then 7.071
    else if date == 20230731 then 4.099
    else if date == 20230807 then 4.76
    else if date == 20230814 then 4.321
    else if date == 20230821 then 4.372
    else if date == 20230828 then 3.842
    else if date == 20230905 then 3.078
else 0;

def geExpectedMove =
 if date == 20230313 then 3.923
    else if date == 20230320 then 4.046
    else if date == 20230327 then 3.478
    else if date == 20230403 then 2.199
    else if date == 20230410 then 2.849
    else if date == 20230417 then 2.168
    else if date == 20230424 then 4.887
    else if date == 20230501 then 2.715
    else if date == 20230508 then 3.011
    else if date == 20230515 then 2.955
    else if date == 20230522 then 2.862
    else if date == 20230530 then 3.222
    else if date == 20230605 then 2.92
    else if date == 20230612 then 2.979
    else if date == 20230620 then 3.619
    else if date == 20230626 then 2.952
    else if date == 20230703 then 2.342
    else if date == 20230710 then 2.602
    else if date == 20230717 then 2.629
    else if date == 20230724 then 5.311
    else if date == 20230731 then 2.593
    else if date == 20230807 then 2.8
    else if date == 20230814 then 2.884
    else if date == 20230821 then 3.04
    else if date == 20230828 then 2.782
    else if date == 20230905 then 2.341
else 0;

def gildExpectedMove =
 if date == 20230313 then 3.143
    else if date == 20230320 then 2.746
    else if date == 20230327 then 2.242
    else if date == 20230403 then 1.674
    else if date == 20230410 then 2.585
    else if date == 20230417 then 2.364
    else if date == 20230424 then 4.036
    else if date == 20230501 then 2.497
    else if date == 20230508 then 2.148
    else if date == 20230515 then 2.215
    else if date == 20230522 then 3.395
    else if date == 20230530 then 2.181
    else if date == 20230605 then 2.781
    else if date == 20230612 then 2.223
    else if date == 20230620 then 2.925
    else if date == 20230626 then 1.923
    else if date == 20230703 then 1.894
    else if date == 20230710 then 2.104
    else if date == 20230717 then 1.822
    else if date == 20230724 then 2.311
    else if date == 20230731 then 4.067
    else if date == 20230807 then 2.206
    else if date == 20230814 then 2.954
    else if date == 20230821 then 2.55
    else if date == 20230828 then 1.697
    else if date == 20230905 then 1.809
else 0;

def gldExpectedMove =
 if date == 20230313 then 3.69
    else if date == 20230320 then 5.737
    else if date == 20230327 then 4.408
    else if date == 20230403 then 2.844
    else if date == 20230410 then 4.226
    else if date == 20230417 then 3.437
    else if date == 20230424 then 3.039
    else if date == 20230501 then 3.33
    else if date == 20230508 then 3.582
    else if date == 20230515 then 3.002
    else if date == 20230522 then 3.354
    else if date == 20230530 then 3.104
    else if date == 20230605 then 2.442
    else if date == 20230612 then 2.85
    else if date == 20230620 then 2.19
    else if date == 20230626 then 2.443
    else if date == 20230703 then 2.12
    else if date == 20230710 then 2.33
    else if date == 20230717 then 2.082
    else if date == 20230724 then 2.572
    else if date == 20230731 then 2.247
    else if date == 20230807 then 2.454
    else if date == 20230814 then 2.04
    else if date == 20230821 then 2.41
    else if date == 20230828 then 2.268
    else if date == 20230905 then 1.906
    else if date == 20230911 then 2.097
else 0;

def gmExpectedMove =
 if date == 20230313 then 1.931
    else if date == 20230320 then 2.017
    else if date == 20230327 then 1.759
    else if date == 20230403 then 1.362
    else if date == 20230410 then 1.577
    else if date == 20230417 then 1.414
    else if date == 20230424 then 2.089
    else if date == 20230501 then 1.322
    else if date == 20230508 then 1.388
    else if date == 20230515 then 1.285
    else if date == 20230522 then 1.275
    else if date == 20230530 then 1.283
    else if date == 20230605 then 1.431
    else if date == 20230612 then 1.511
    else if date == 20230620 then 1.231
    else if date == 20230626 then 1.204
    else if date == 20230703 then 1.051
    else if date == 20230710 then 1.174
    else if date == 20230717 then 1.065
    else if date == 20230724 then 2.075
    else if date == 20230731 then 1.157
    else if date == 20230807 then 1.098
    else if date == 20230814 then 1.307
    else if date == 20230821 then 1.252
    else if date == 20230828 then 1.13
    else if date == 20230905 then 0.897
else 0;

def googExpectedMove =
 if date == 20230313 then 4.166
    else if date == 20230320 then 4.391
    else if date == 20230327 then 3.914
    else if date == 20230403 then 2.917
    else if date == 20230410 then 3.86
    else if date == 20230417 then 3.232
    else if date == 20230424 then 6.153
    else if date == 20230501 then 3.201
    else if date == 20230508 then 3.899
    else if date == 20230515 then 3.363
    else if date == 20230522 then 3.747
    else if date == 20230530 then 3.733
    else if date == 20230605 then 3.541
    else if date == 20230612 then 3.939
    else if date == 20230620 then 3.564
    else if date == 20230626 then 3.229
    else if date == 20230703 then 2.675
    else if date == 20230710 then 3.48
    else if date == 20230717 then 3.797
    else if date == 20230724 then 7.539
    else if date == 20230731 then 3.535
    else if date == 20230807 then 4.982
    else if date == 20230814 then 3.462
    else if date == 20230821 then 4.28
    else if date == 20230828 then 4.178
    else if date == 20230905 then 3.013
else 0;

def googlExpectedMove =
 if date == 20230313 then 4.128
    else if date == 20230320 then 4.394
    else if date == 20230327 then 3.894
    else if date == 20230403 then 3.23
    else if date == 20230410 then 3.817
    else if date == 20230417 then 3.278
    else if date == 20230424 then 6.112
    else if date == 20230501 then 3.365
    else if date == 20230508 then 3.128
    else if date == 20230515 then 3.485
    else if date == 20230522 then 3.964
    else if date == 20230530 then 4.558
    else if date == 20230605 then 3.213
    else if date == 20230612 then 3.98
    else if date == 20230620 then 3.446
    else if date == 20230626 then 3.367
    else if date == 20230703 then 2.72
    else if date == 20230710 then 3.252
    else if date == 20230717 then 3.677
    else if date == 20230724 then 7.532
    else if date == 20230731 then 3.431
    else if date == 20230807 then 3.828
    else if date == 20230814 then 3.545
    else if date == 20230821 then 4.261
    else if date == 20230828 then 4.27
    else if date == 20230905 then 2.935
else 0;

def gsExpectedMove =
 if date == 20230313 then 16.839
    else if date == 20230320 then 18.186
    else if date == 20230327 then 13.911
    else if date == 20230403 then 7.644
    else if date == 20230410 then 9.474
    else if date == 20230417 then 14.496
    else if date == 20230424 then 7.48
    else if date == 20230501 then 8.063
    else if date == 20230508 then 9.695
    else if date == 20230515 then 8.213
    else if date == 20230522 then 8.835
    else if date == 20230530 then 8.686
    else if date == 20230605 then 7.897
    else if date == 20230612 then 8.306
    else if date == 20230620 then 6.908
    else if date == 20230626 then 9.193
    else if date == 20230703 then 6.084
    else if date == 20230710 then 8.082
    else if date == 20230717 then 12.336
    else if date == 20230724 then 8.934
    else if date == 20230731 then 7.585
    else if date == 20230807 then 8.198
    else if date == 20230814 then 8.295
    else if date == 20230821 then 9.017
    else if date == 20230828 then 7.741
    else if date == 20230905 then 6.128
else 0;

def hdExpectedMove =
 if date == 20230313 then 11.231
    else if date == 20230320 then 10.168
    else if date == 20230327 then 8.646
    else if date == 20230403 then 6.404
    else if date == 20230410 then 7.524
    else if date == 20230417 then 1.991
    else if date == 20230424 then 6.661
    else if date == 20230501 then 7.151
    else if date == 20230508 then 7.573
    else if date == 20230515 then 14.933
    else if date == 20230522 then 7.468
    else if date == 20230530 then 7.345
    else if date == 20230605 then 6.486
    else if date == 20230612 then 9.029
    else if date == 20230620 then 6.363
    else if date == 20230626 then 6.017
    else if date == 20230703 then 5.194
    else if date == 20230710 then 6.339
    else if date == 20230717 then 6.494
    else if date == 20230724 then 6.92
    else if date == 20230731 then 6.132
    else if date == 20230807 then 7.37
    else if date == 20230814 then 13.801
    else if date == 20230821 then 8.027
    else if date == 20230828 then 6.656
    else if date == 20230905 then 5.093
else 0;

def honExpectedMove =
 if date == 20230313 then 5.72
    else if date == 20230320 then 7.063
    else if date == 20230327 then 5.305
    else if date == 20230403 then 3.57
    else if date == 20230410 then 4.63
    else if date == 20230417 then 3.976
    else if date == 20230424 then 6.458
    else if date == 20230501 then 4.059
    else if date == 20230508 then 4.489
    else if date == 20230515 then 4.951
    else if date == 20230522 then 4.241
    else if date == 20230530 then 4.302
    else if date == 20230605 then 3.966
    else if date == 20230612 then 4.229
    else if date == 20230620 then 3.556
    else if date == 20230626 then 3.744
    else if date == 20230703 then 2.906
    else if date == 20230710 then 3.803
    else if date == 20230717 then 3.536
    else if date == 20230724 then 7.442
    else if date == 20230731 then 3.798
    else if date == 20230807 then 3.797
    else if date == 20230814 then 3.735
    else if date == 20230821 then 3.927
    else if date == 20230828 then 3.3
    else if date == 20230905 then 2.685
else 0;

def hygExpectedMove =
 if date == 20230313 then 1.47
    else if date == 20230320 then 1.5
    else if date == 20230327 then 1.109
    else if date == 20230403 then 0.83
    else if date == 20230410 then 1.031
    else if date == 20230417 then 0.822
    else if date == 20230424 then 0.773
    else if date == 20230501 then 0.816
    else if date == 20230508 then 0.735
    else if date == 20230515 then 0.729
    else if date == 20230522 then 0.676
    else if date == 20230530 then 0.814
    else if date == 20230605 then 0.579
    else if date == 20230612 then 0.701
    else if date == 20230620 then 0.516
    else if date == 20230626 then 0.614
    else if date == 20230703 then 0.549
    else if date == 20230710 then 0.682
    else if date == 20230717 then 0.586
    else if date == 20230724 then 0.644
    else if date == 20230731 then 0.624
    else if date == 20230807 then 0.766
    else if date == 20230814 then 0.788
    else if date == 20230821 then 0.778
    else if date == 20230828 then 0.744
    else if date == 20230905 then 0.487
    else if date == 20230911 then 0.366
else 0;

def ibmExpectedMove =
 if date == 20230313 then 3.503
    else if date == 20230320 then 5.844
    else if date == 20230327 then 3.079
    else if date == 20230403 then 2.345
    else if date == 20230410 then 2.735
    else if date == 20230417 then 5.837
    else if date == 20230424 then 2.159
    else if date == 20230501 then 2.329
    else if date == 20230508 then 2.518
    else if date == 20230515 then 2.247
    else if date == 20230522 then 2.536
    else if date == 20230530 then 2.969
    else if date == 20230605 then 2.605
    else if date == 20230612 then 2.804
    else if date == 20230620 then 2.9
    else if date == 20230626 then 2.38
    else if date == 20230703 then 2.006
    else if date == 20230710 then 2.269
    else if date == 20230717 then 4.312
    else if date == 20230724 then 2.721
    else if date == 20230731 then 2.345
    else if date == 20230807 then 1.996
    else if date == 20230814 then 2.628
    else if date == 20230821 then 3.21
    else if date == 20230828 then 2.386
    else if date == 20230905 then 1.708
else 0;

def intcExpectedMove =
 if date == 20230313 then 1.363
    else if date == 20230320 then 1.641
    else if date == 20230327 then 1.52
    else if date == 20230403 then 1.249
    else if date == 20230410 then 1.336
    else if date == 20230417 then 1.067
    else if date == 20230424 then 2.171
    else if date == 20230501 then 1.195
    else if date == 20230508 then 1.169
    else if date == 20230515 then 1.007
    else if date == 20230522 then 1.152
    else if date == 20230530 then 1.35
    else if date == 20230605 then 1.27
    else if date == 20230612 then 1.492
    else if date == 20230620 then 2.227
    else if date == 20230626 then 1.381
    else if date == 20230703 then 1.027
    else if date == 20230710 then 1.158
    else if date == 20230717 then 1.313
    else if date == 20230724 then 2.55
    else if date == 20230731 then 1.358
    else if date == 20230807 then 1.34
    else if date == 20230814 then 1.284
    else if date == 20230821 then 1.472
    else if date == 20230828 then 1.28
    else if date == 20230905 then 1.213
else 0;

def iwmExpectedMove =
 if date == 20230313 then 7.147
    else if date == 20230320 then 7.521
    else if date == 20230327 then 5.717
    else if date == 20230403 then 3.854
    else if date == 20230410 then 4.828
    else if date == 20230417 then 3.78
    else if date == 20230424 then 3.875
    else if date == 20230501 then 4.206
    else if date == 20230508 then 4.308
    else if date == 20230515 then 3.929
    else if date == 20230522 then 4.019
    else if date == 20230530 then 4.555
    else if date == 20230605 then 4.081
    else if date == 20230612 then 4.57
    else if date == 20230620 then 3.632
    else if date == 20230626 then 3.79
    else if date == 20230703 then 3.27
    else if date == 20230710 then 3.772
    else if date == 20230717 then 3.698
    else if date == 20230724 then 4.076
    else if date == 20230731 then 3.638
    else if date == 20230807 then 4.516
    else if date == 20230814 then 3.837
    else if date == 20230821 then 4.307
    else if date == 20230828 then 3.782
    else if date == 20230905 then 2.847
    else if date == 20230911 then 3.825
else 0;

def jnjExpectedMove =
 if date == 20230313 then 3.954
    else if date == 20230320 then 4.068
    else if date == 20230327 then 3.358
    else if date == 20230403 then 2.619
    else if date == 20230410 then 3.093
    else if date == 20230417 then 4.092
    else if date == 20230424 then 3.032
    else if date == 20230501 then 2.708
    else if date == 20230508 then 2.859
    else if date == 20230515 then 2.907
    else if date == 20230522 then 3.039
    else if date == 20230530 then 3.035
    else if date == 20230605 then 2.932
    else if date == 20230612 then 2.967
    else if date == 20230620 then 2.244
    else if date == 20230626 then 2.21
    else if date == 20230703 then 2.495
    else if date == 20230710 then 2.582
    else if date == 20230717 then 3.93
    else if date == 20230724 then 3.583
    else if date == 20230731 then 3.972
    else if date == 20230807 then 4.149
    else if date == 20230814 then 4.159
    else if date == 20230821 then 7.215
    else if date == 20230828 then 3.206
    else if date == 20230905 then 2.725
else 0;

def jpmExpectedMove =
 if date == 20230313 then 6.846
    else if date == 20230320 then 7.864
    else if date == 20230327 then 5.394
    else if date == 20230403 then 3.113
    else if date == 20230410 then 5.621
    else if date == 20230417 then 3.415
    else if date == 20230424 then 2.907
    else if date == 20230501 then 3.004
    else if date == 20230508 then 4.205
    else if date == 20230515 then 3.336
    else if date == 20230522 then 4.406
    else if date == 20230530 then 3.332
    else if date == 20230605 then 2.879
    else if date == 20230612 then 3.126
    else if date == 20230620 then 2.272
    else if date == 20230626 then 3.281
    else if date == 20230703 then 2.606
    else if date == 20230710 then 4.646
    else if date == 20230717 then 2.203
    else if date == 20230724 then 3.35
    else if date == 20230731 then 2.909
    else if date == 20230807 then 3.467
    else if date == 20230814 then 3.253
    else if date == 20230821 then 3.723
    else if date == 20230828 then 3.241
    else if date == 20230905 then 2.569
else 0;

def khcExpectedMove =
 if date == 20230313 then 1.087
    else if date == 20230320 then 1.233
    else if date == 20230327 then 0.999
    else if date == 20230403 then 0.692
    else if date == 20230410 then 0.826
    else if date == 20230417 then 0.67
    else if date == 20230424 then 0.731
    else if date == 20230501 then 1.463
    else if date == 20230508 then 0.741
    else if date == 20230515 then 0.708
    else if date == 20230522 then 0.747
    else if date == 20230530 then 0.775
    else if date == 20230605 then 0.689
    else if date == 20230612 then 0.835
    else if date == 20230620 then 0.581
    else if date == 20230626 then 0.644
    else if date == 20230703 then 0.516
    else if date == 20230710 then 0.61
    else if date == 20230717 then 0.636
    else if date == 20230724 then 1.73
    else if date == 20230731 then 1.228
    else if date == 20230807 then 0.657
    else if date == 20230814 then 0.606
    else if date == 20230821 then 0.653
    else if date == 20230828 then 0.673
    else if date == 20230905 then 0.576
else 0;

def koExpectedMove =
 if date == 20230313 then 1.528
    else if date == 20230320 then 1.462
    else if date == 20230327 then 1.247
    else if date == 20230403 then 0.896
    else if date == 20230410 then 1.034
    else if date == 20230417 then 0.928
    else if date == 20230424 then 1.482
    else if date == 20230501 then 0.913
    else if date == 20230508 then 0.916
    else if date == 20230515 then 0.899
    else if date == 20230522 then 1.026
    else if date == 20230530 then 1.126
    else if date == 20230605 then 1.689
    else if date == 20230612 then 1.074
    else if date == 20230620 then 0.824
    else if date == 20230626 then 0.59
    else if date == 20230703 then 0.809
    else if date == 20230710 then 0.99
    else if date == 20230717 then 1.211
    else if date == 20230724 then 1.472
    else if date == 20230731 then 0.842
    else if date == 20230807 then 0.8
    else if date == 20230814 then 0.927
    else if date == 20230821 then 1.023
    else if date == 20230828 then 0.91
    else if date == 20230905 then 0.828
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
    else if date == 20230417 then 9.801
    else if date == 20230424 then 15.829
    else if date == 20230501 then 9.936
    else if date == 20230508 then 10.139
    else if date == 20230515 then 10.348
    else if date == 20230522 then 9.864
    else if date == 20230530 then 11.213
    else if date == 20230605 then 11.858
    else if date == 20230612 then 13.049
    else if date == 20230620 then 10.662
    else if date == 20230626 then 13.852
    else if date == 20230703 then 8.99
    else if date == 20230710 then 11.917
    else if date == 20230717 then 14.438
    else if date == 20230724 then 14.512
    else if date == 20230731 then 15.063
    else if date == 20230807 then 22.883
    else if date == 20230814 then 14.638
    else if date == 20230821 then 14.739
    else if date == 20230828 then 12.541
    else if date == 20230905 then 9.87
else 0;

def lmtExpectedMove =
 if date == 20230313 then 12.595
    else if date == 20230320 then 14.4
    else if date == 20230327 then 11.058
    else if date == 20230403 then 7.935
    else if date == 20230410 then 9.894
    else if date == 20230417 then 14.997
    else if date == 20230424 then 9.342
    else if date == 20230501 then 8.481
    else if date == 20230508 then 9.51
    else if date == 20230515 then 8.518
    else if date == 20230522 then 9.44
    else if date == 20230530 then 10.541
    else if date == 20230605 then 9.226
    else if date == 20230612 then 9.677
    else if date == 20230620 then 7.697
    else if date == 20230626 then 7.068
    else if date == 20230703 then 7.006
    else if date == 20230710 then 8.022
    else if date == 20230717 then 14.131
    else if date == 20230724 then 9.559
    else if date == 20230731 then 5.873
    else if date == 20230807 then 7.779
    else if date == 20230814 then 7.677
    else if date == 20230821 then 8.533
    else if date == 20230828 then 7.735
    else if date == 20230905 then 5.69
else 0;

def lowExpectedMove =
 if date == 20230313 then 8.13
    else if date == 20230320 then 7.915
    else if date == 20230327 then 6.525
    else if date == 20230403 then 4.898
    else if date == 20230410 then 5.866
    else if date == 20230417 then 4.841
    else if date == 20230424 then 5.288
    else if date == 20230501 then 5.449
    else if date == 20230508 then 5.736
    else if date == 20230515 then 6.459
    else if date == 20230522 then 10.02
    else if date == 20230530 then 5.827
    else if date == 20230605 then 5.351
    else if date == 20230612 then 5.717
    else if date == 20230620 then 4.9
    else if date == 20230626 then 5.321
    else if date == 20230703 then 4.611
    else if date == 20230710 then 4.708
    else if date == 20230717 then 5.259
    else if date == 20230724 then 5.101
    else if date == 20230731 then 4.556
    else if date == 20230807 then 5.636
    else if date == 20230814 then 6.63
    else if date == 20230821 then 9.84
    else if date == 20230828 then 4.996
    else if date == 20230905 then 3.667
else 0;

def maExpectedMove =
 if date == 20230313 then 13.693
    else if date == 20230320 then 13.543
    else if date == 20230327 then 11.047
    else if date == 20230403 then 7.318
    else if date == 20230410 then 9.41
    else if date == 20230417 then 8.195
    else if date == 20230424 then 13.047
    else if date == 20230501 then 7.701
    else if date == 20230508 then 7.996
    else if date == 20230515 then 7.611
    else if date == 20230522 then 9.029
    else if date == 20230530 then 8.565
    else if date == 20230605 then 8.292
    else if date == 20230612 then 8.72
    else if date == 20230620 then 7.703
    else if date == 20230626 then 7.312
    else if date == 20230703 then 6.211
    else if date == 20230710 then 7.733
    else if date == 20230717 then 8.329
    else if date == 20230724 then 14.61
    else if date == 20230731 then 7.744
    else if date == 20230807 then 8.553
    else if date == 20230814 then 8.37
    else if date == 20230821 then 9.28
    else if date == 20230828 then 7.811
    else if date == 20230905 then 5.89
else 0;

def mcdExpectedMove =
 if date == 20230313 then 7.139
    else if date == 20230320 then 7.664
    else if date == 20230327 then 6.161
    else if date == 20230403 then 4.378
    else if date == 20230410 then 4.802
    else if date == 20230417 then 4.356
    else if date == 20230424 then 8.255
    else if date == 20230501 then 4.22
    else if date == 20230508 then 4.893
    else if date == 20230515 then 4.62
    else if date == 20230522 then 4.728
    else if date == 20230530 then 5.563
    else if date == 20230605 then 4.299
    else if date == 20230612 then 4.941
    else if date == 20230620 then 4.252
    else if date == 20230626 then 4.724
    else if date == 20230703 then 3.537
    else if date == 20230710 then 4.56
    else if date == 20230717 then 4.435
    else if date == 20230724 then 8.859
    else if date == 20230731 then 4.938
    else if date == 20230807 then 5.449
    else if date == 20230814 then 4.744
    else if date == 20230821 then 4.933
    else if date == 20230828 then 4.862
    else if date == 20230905 then 3.806
else 0;

def mdlzExpectedMove =
 if date == 20230313 then 1.704
    else if date == 20230320 then 1.882
    else if date == 20230327 then 1.457
    else if date == 20230403 then 1.047
    else if date == 20230410 then 1.39
    else if date == 20230417 then 1.146
    else if date == 20230424 then 1.941
    else if date == 20230501 then 1.261
    else if date == 20230508 then 1.064
    else if date == 20230515 then 1.184
    else if date == 20230522 then 1.221
    else if date == 20230530 then 1.364
    else if date == 20230605 then 1.201
    else if date == 20230612 then 1.306
    else if date == 20230620 then 1.081
    else if date == 20230626 then 1.081
    else if date == 20230703 then 0.917
    else if date == 20230710 then 1.143
    else if date == 20230717 then 0.973
    else if date == 20230724 then 2.626
    else if date == 20230731 then 1.143
    else if date == 20230807 then 1.219
    else if date == 20230814 then 1.149
    else if date == 20230821 then 1.285
    else if date == 20230828 then 1.065
    else if date == 20230905 then 1.177
else 0;

def mdtExpectedMove =
 if date == 20230313 then 2.815
    else if date == 20230320 then 4.18
    else if date == 20230327 then 2.559
    else if date == 20230403 then 1.739
    else if date == 20230410 then 2.13
    else if date == 20230417 then 2.289
    else if date == 20230424 then 2.37
    else if date == 20230501 then 2.464
    else if date == 20230508 then 3.576
    else if date == 20230515 then 4.79
    else if date == 20230522 then 4.634
    else if date == 20230530 then 2.621
    else if date == 20230605 then 2.036
    else if date == 20230612 then 1.542
    else if date == 20230620 then 2.598
    else if date == 20230626 then 2.116
    else if date == 20230703 then 2.149
    else if date == 20230710 then 1.924
    else if date == 20230717 then 1.946
    else if date == 20230724 then 2.236
    else if date == 20230731 then 2.91
    else if date == 20230807 then 2.38
    else if date == 20230814 then 2.532
    else if date == 20230821 then 3.739
    else if date == 20230828 then 2.338
    else if date == 20230905 then 1.242
else 0;

def metExpectedMove =
 if date == 20230313 then 3.544
    else if date == 20230320 then 4.029
    else if date == 20230327 then 3.068
    else if date == 20230403 then 1.72
    else if date == 20230410 then 1.914
    else if date == 20230417 then 1.717
    else if date == 20230424 then 1.699
    else if date == 20230501 then 2.571
    else if date == 20230508 then 2.232
    else if date == 20230515 then 2.019
    else if date == 20230522 then 1.856
    else if date == 20230530 then 1.779
    else if date == 20230605 then 1.732
    else if date == 20230612 then 1.738
    else if date == 20230620 then 1.47
    else if date == 20230626 then 1.547
    else if date == 20230703 then 1.211
    else if date == 20230710 then 1.453
    else if date == 20230717 then 1.605
    else if date == 20230724 then 1.596
    else if date == 20230731 then 2.318
    else if date == 20230807 then 1.635
    else if date == 20230814 then 1.476
    else if date == 20230821 then 1.642
    else if date == 20230828 then 1.488
    else if date == 20230905 then 1.1
else 0;

def metaExpectedMove =
 if date == 20230313 then 9.235
    else if date == 20230320 then 11.177
    else if date == 20230327 then 9.615
    else if date == 20230403 then 7.02
    else if date == 20230410 then 8.534
    else if date == 20230417 then 7.58
    else if date == 20230424 then 19.664
    else if date == 20230501 then 8.508
    else if date == 20230508 then 8.214
    else if date == 20230515 then 7.326
    else if date == 20230522 then 8.794
    else if date == 20230530 then 9.54
    else if date == 20230605 then 9.559
    else if date == 20230612 then 9.803
    else if date == 20230620 then 10.445
    else if date == 20230626 then 11.277
    else if date == 20230703 then 8.21
    else if date == 20230710 then 11.054
    else if date == 20230717 then 12.38
    else if date == 20230724 then 29.997
    else if date == 20230731 then 11.455
    else if date == 20230807 then 10.646
    else if date == 20230814 then 11.655
    else if date == 20230821 then 12.389
    else if date == 20230828 then 11.049
    else if date == 20230905 then 9.199
else 0;

def mmmExpectedMove =
 if date == 20230313 then 4.091
    else if date == 20230320 then 4.481
    else if date == 20230327 then 3.638
    else if date == 20230403 then 2.499
    else if date == 20230410 then 2.931
    else if date == 20230417 then 2.8
    else if date == 20230424 then 4.91
    else if date == 20230501 then 2.683
    else if date == 20230508 then 3.054
    else if date == 20230515 then 3.087
    else if date == 20230522 then 2.849
    else if date == 20230530 then 3.024
    else if date == 20230605 then 4.069
    else if date == 20230612 then 3.253
    else if date == 20230620 then 3.037
    else if date == 20230626 then 2.93
    else if date == 20230703 then 1.979
    else if date == 20230710 then 2.285
    else if date == 20230717 then 2.537
    else if date == 20230724 then 4.8
    else if date == 20230731 then 2.598
    else if date == 20230807 then 2.757
    else if date == 20230814 then 3.123
    else if date == 20230821 then 2.666
    else if date == 20230828 then 2.428
    else if date == 20230905 then 2.156
else 0;

def moExpectedMove =
 if date == 20230313 then 1.263
    else if date == 20230320 then 1.746
    else if date == 20230327 then 1.121
    else if date == 20230403 then 0.762
    else if date == 20230410 then 0.86
    else if date == 20230417 then 0.764
    else if date == 20230424 then 1.043
    else if date == 20230501 then 0.795
    else if date == 20230508 then 0.789
    else if date == 20230515 then 0.965
    else if date == 20230522 then 0.841
    else if date == 20230530 then 0.891
    else if date == 20230605 then 0.771
    else if date == 20230612 then 1.025
    else if date == 20230620 then 0.675
    else if date == 20230626 then 0.593
    else if date == 20230703 then 0.53
    else if date == 20230710 then 0.716
    else if date == 20230717 then 0.704
    else if date == 20230724 then 0.752
    else if date == 20230731 then 0.992
    else if date == 20230807 then 0.815
    else if date == 20230814 then 0.697
    else if date == 20230821 then 0.755
    else if date == 20230828 then 0.643
    else if date == 20230905 then 0.568
else 0;

def mrkExpectedMove =
 if date == 20230313 then 3.266
    else if date == 20230320 then 3.874
    else if date == 20230327 then 2.931
    else if date == 20230403 then 2.254
    else if date == 20230410 then 2.649
    else if date == 20230417 then 2.637
    else if date == 20230424 then 3.427
    else if date == 20230501 then 2.421
    else if date == 20230508 then 2.524
    else if date == 20230515 then 2.441
    else if date == 20230522 then 2.608
    else if date == 20230530 then 2.835
    else if date == 20230605 then 2.761
    else if date == 20230612 then 2.891
    else if date == 20230620 then 2.263
    else if date == 20230626 then 3.098
    else if date == 20230703 then 2.035
    else if date == 20230710 then 2.552
    else if date == 20230717 then 2.4
    else if date == 20230724 then 2.555
    else if date == 20230731 then 3.463
    else if date == 20230807 then 2.334
    else if date == 20230814 then 2.122
    else if date == 20230821 then 2.358
    else if date == 20230828 then 2.369
    else if date == 20230905 then 1.873
else 0;

def msExpectedMove =
 if date == 20230313 then 4.486
    else if date == 20230320 then 5.569
    else if date == 20230327 then 4.185
    else if date == 20230403 then 2.367
    else if date == 20230410 then 2.867
    else if date == 20230417 then 3.869
    else if date == 20230424 then 2.336
    else if date == 20230501 then 2.731
    else if date == 20230508 then 2.666
    else if date == 20230515 then 2.371
    else if date == 20230522 then 2.625
    else if date == 20230530 then 2.457
    else if date == 20230605 then 2.082
    else if date == 20230612 then 2.523
    else if date == 20230620 then 1.948
    else if date == 20230626 then 2.364
    else if date == 20230703 then 1.67
    else if date == 20230710 then 2.27
    else if date == 20230717 then 3.305
    else if date == 20230724 then 2.67
    else if date == 20230731 then 2.008
    else if date == 20230807 then 2.212
    else if date == 20230814 then 2.085
    else if date == 20230821 then 2.452
    else if date == 20230828 then 2.036
    else if date == 20230905 then 1.623
else 0;

def msftExpectedMove =
 if date == 20230313 then 10.456
    else if date == 20230320 then 11.699
    else if date == 20230327 then 9.372
    else if date == 20230403 then 7.062
    else if date == 20230410 then 8.294
    else if date == 20230417 then 6.597
    else if date == 20230424 then 12.405
    else if date == 20230501 then 7.742
    else if date == 20230508 then 7.245
    else if date == 20230515 then 6.461
    else if date == 20230522 then 6.876
    else if date == 20230530 then 8.853
    else if date == 20230605 then 7.678
    else if date == 20230612 then 8.618
    else if date == 20230620 then 8.559
    else if date == 20230626 then 8.149
    else if date == 20230703 then 6.746
    else if date == 20230710 then 8.292
    else if date == 20230717 then 9.689
    else if date == 20230724 then 21.007
    else if date == 20230731 then 9.031
    else if date == 20230807 then 9.569
    else if date == 20230814 then 8.765
    else if date == 20230821 then 9.659
    else if date == 20230828 then 8.131
    else if date == 20230905 then 7.727
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
    else if date == 20230417 then 30.969
    else if date == 20230424 then 11.875
    else if date == 20230501 then 11.757
    else if date == 20230508 then 10.517
    else if date == 20230515 then 11.53
    else if date == 20230522 then 14.223
    else if date == 20230530 then 18.141
    else if date == 20230605 then 17.493
    else if date == 20230612 then 19.207
    else if date == 20230620 then 18.091
    else if date == 20230626 then 15.999
    else if date == 20230703 then 14.097
    else if date == 20230710 then 16.105
    else if date == 20230717 then 40.079
    else if date == 20230724 then 17.766
    else if date == 20230731 then 14.094
    else if date == 20230807 then 15.653
    else if date == 20230814 then 15.155
    else if date == 20230821 then 15.085
    else if date == 20230828 then 15.106
    else if date == 20230905 then 13.563
else 0;

def nkeExpectedMove =
 if date == 20230313 then 4.98
    else if date == 20230320 then 10.964
    else if date == 20230327 then 4.335
    else if date == 20230403 then 2.966
    else if date == 20230410 then 3.658
    else if date == 20230417 then 3.12
    else if date == 20230424 then 3.033
    else if date == 20230501 then 3.294
    else if date == 20230508 then 3.742
    else if date == 20230515 then 3.654
    else if date == 20230522 then 3.738
    else if date == 20230530 then 3.533
    else if date == 20230605 then 3.168
    else if date == 20230612 then 3.158
    else if date == 20230620 then 2.855
    else if date == 20230626 then 6.526
    else if date == 20230703 then 2.659
    else if date == 20230710 then 2.788
    else if date == 20230717 then 2.694
    else if date == 20230724 then 3.028
    else if date == 20230731 then 2.799
    else if date == 20230807 then 3.068
    else if date == 20230814 then 2.989
    else if date == 20230821 then 3.096
    else if date == 20230828 then 2.899
    else if date == 20230905 then 2.073
else 0;

def nvdaExpectedMove =
 if date == 20230313 then 14.727
    else if date == 20230320 then 17.338
    else if date == 20230327 then 14.219
    else if date == 20230403 then 10.34
    else if date == 20230410 then 12.197
    else if date == 20230417 then 10.862
    else if date == 20230424 then 11.212
    else if date == 20230501 then 10.862
    else if date == 20230508 then 11.431
    else if date == 20230515 then 9.952
    else if date == 20230522 then 23.071
    else if date == 20230530 then 20.749
    else if date == 20230605 then 18.662
    else if date == 20230612 then 18.21
    else if date == 20230620 then 22.208
    else if date == 20230626 then 18.296
    else if date == 20230703 then 15.143
    else if date == 20230710 then 16.85
    else if date == 20230717 then 22.986
    else if date == 20230724 then 23.65
    else if date == 20230731 then 20.657
    else if date == 20230807 then 19.964
    else if date == 20230814 then 19.97
    else if date == 20230821 then 49.262
    else if date == 20230828 then 23.385
    else if date == 20230905 then 18.029
else 0;

def orclExpectedMove =
 if date == 20230313 then 3.129
    else if date == 20230320 then 3.225
    else if date == 20230327 then 2.765
    else if date == 20230403 then 1.989
    else if date == 20230410 then 2.382
    else if date == 20230417 then 1.924
    else if date == 20230424 then 1.91
    else if date == 20230501 then 2.947
    else if date == 20230508 then 2.064
    else if date == 20230515 then 2.031
    else if date == 20230522 then 2.343
    else if date == 20230530 then 2.726
    else if date == 20230605 then 2.463
    else if date == 20230612 then 8.098
    else if date == 20230620 then 3.82
    else if date == 20230626 then 3.418
    else if date == 20230703 then 2.52
    else if date == 20230710 then 2.866
    else if date == 20230717 then 3.288
    else if date == 20230724 then 3.99
    else if date == 20230731 then 3.084
    else if date == 20230807 then 3.405
    else if date == 20230814 then 3.328
    else if date == 20230821 then 4.12
    else if date == 20230828 then 3.273
    else if date == 20230905 then 2.622
else 0;

def pepExpectedMove =
 if date == 20230313 then 4.67
    else if date == 20230320 then 5.341
    else if date == 20230327 then 4.135
    else if date == 20230403 then 2.784
    else if date == 20230410 then 3.206
    else if date == 20230417 then 3.058
    else if date == 20230424 then 4.534
    else if date == 20230501 then 2.885
    else if date == 20230508 then 2.809
    else if date == 20230515 then 2.865
    else if date == 20230522 then 3.24
    else if date == 20230530 then 3.931
    else if date == 20230605 then 3.155
    else if date == 20230612 then 3.636
    else if date == 20230620 then 2.875
    else if date == 20230626 then 2.994
    else if date == 20230703 then 2.465
    else if date == 20230710 then 4.651
    else if date == 20230717 then 3.028
    else if date == 20230724 then 3.363
    else if date == 20230731 then 2.195
    else if date == 20230807 then 3.27
    else if date == 20230814 then 3.16
    else if date == 20230821 then 3.39
    else if date == 20230828 then 3.241
    else if date == 20230905 then 2.594
else 0;

def pfeExpectedMove =
 if date == 20230313 then 1.45
    else if date == 20230320 then 1.247
    else if date == 20230327 then 1.077
    else if date == 20230403 then 0.861
    else if date == 20230410 then 0.977
    else if date == 20230417 then 0.853
    else if date == 20230424 then 0.783
    else if date == 20230501 then 1.509
    else if date == 20230508 then 0.955
    else if date == 20230515 then 0.807
    else if date == 20230522 then 0.8
    else if date == 20230530 then 1.046
    else if date == 20230605 then 0.905
    else if date == 20230612 then 0.961
    else if date == 20230620 then 0.844
    else if date == 20230626 then 0.84
    else if date == 20230703 then 0.703
    else if date == 20230710 then 0.791
    else if date == 20230717 then 0.807
    else if date == 20230724 then 0.969
    else if date == 20230731 then 1.327
    else if date == 20230807 then 0.808
    else if date == 20230814 then 0.806
    else if date == 20230821 then 0.978
    else if date == 20230828 then 0.815
    else if date == 20230905 then 0.719
else 0;

def pgExpectedMove =
 if date == 20230313 then 3.726
    else if date == 20230320 then 3.875
    else if date == 20230327 then 3.262
    else if date == 20230403 then 2.168
    else if date == 20230410 then 2.488
    else if date == 20230417 then 3.533
    else if date == 20230424 then 2.767
    else if date == 20230501 then 2.334
    else if date == 20230508 then 1.25
    else if date == 20230515 then 2.273
    else if date == 20230522 then 2.692
    else if date == 20230530 then 2.827
    else if date == 20230605 then 2.429
    else if date == 20230612 then 2.632
    else if date == 20230620 then 2.284
    else if date == 20230626 then 2.212
    else if date == 20230703 then 1.707
    else if date == 20230710 then 2.529
    else if date == 20230717 then 2.514
    else if date == 20230724 then 5.39
    else if date == 20230731 then 2.521
    else if date == 20230807 then 2.582
    else if date == 20230814 then 2.407
    else if date == 20230821 then 2.781
    else if date == 20230828 then 2.433
    else if date == 20230905 then 2.011
else 0;

def pmExpectedMove =
 if date == 20230313 then 2.631
    else if date == 20230320 then 3.133
    else if date == 20230327 then 2.335
    else if date == 20230403 then 1.707
    else if date == 20230410 then 1.875
    else if date == 20230417 then 2.745
    else if date == 20230424 then 1.631
    else if date == 20230501 then 1.549
    else if date == 20230508 then 1.758
    else if date == 20230515 then 1.821
    else if date == 20230522 then 1.865
    else if date == 20230530 then 1.911
    else if date == 20230605 then 1.032
    else if date == 20230612 then 1.771
    else if date == 20230620 then 1.766
    else if date == 20230626 then 1.476
    else if date == 20230703 then 1.181
    else if date == 20230710 then 1.501
    else if date == 20230717 then 2.921
    else if date == 20230724 then 1.769
    else if date == 20230731 then 1.534
    else if date == 20230807 then 1.618
    else if date == 20230814 then 1.723
    else if date == 20230821 then 1.781
    else if date == 20230828 then 1.547
    else if date == 20230905 then 1.279
else 0;

def pyplExpectedMove =
 if date == 20230313 then 4.209
    else if date == 20230320 then 4.03
    else if date == 20230327 then 3.503
    else if date == 20230403 then 2.615
    else if date == 20230410 then 3.042
    else if date == 20230417 then 2.739
    else if date == 20230424 then 2.547
    else if date == 20230501 then 2.796
    else if date == 20230508 then 5.785
    else if date == 20230515 then 2.286
    else if date == 20230522 then 2.387
    else if date == 20230530 then 2.294
    else if date == 20230605 then 2.49
    else if date == 20230612 then 2.62
    else if date == 20230620 then 2.59
    else if date == 20230626 then 2.54
    else if date == 20230703 then 1.968
    else if date == 20230710 then 2.338
    else if date == 20230717 then 2.643
    else if date == 20230724 then 2.718
    else if date == 20230731 then 5.982
    else if date == 20230807 then 2.499
    else if date == 20230814 then 2.193
    else if date == 20230821 then 2.33
    else if date == 20230828 then 2.04
    else if date == 20230905 then 1.686
else 0;

def qcomExpectedMove =
 if date == 20230313 then 5.742
    else if date == 20230320 then 6.073
    else if date == 20230327 then 4.962
    else if date == 20230403 then 3.847
    else if date == 20230410 then 4.482
    else if date == 20230417 then 3.885
    else if date == 20230424 then 3.484
    else if date == 20230501 then 7.307
    else if date == 20230508 then 3.381
    else if date == 20230515 then 3.053
    else if date == 20230522 then 3.457
    else if date == 20230530 then 4.534
    else if date == 20230605 then 1.906
    else if date == 20230612 then 4.294
    else if date == 20230620 then 3.867
    else if date == 20230626 then 3.579
    else if date == 20230703 then 2.856
    else if date == 20230710 then 3.332
    else if date == 20230717 then 2.714
    else if date == 20230724 then 4.607
    else if date == 20230731 then 7.535
    else if date == 20230807 then 4.24
    else if date == 20230814 then 3.678
    else if date == 20230821 then 3.829
    else if date == 20230828 then 3.358
    else if date == 20230905 then 2.548
else 0;

def qqqExpectedMove =
 if date == 20230313 then 10.026
    else if date == 20230320 then 10.663
    else if date == 20230327 then 8.748
    else if date == 20230403 then 6.38
    else if date == 20230410 then 7.871
    else if date == 20230417 then 6.254
    else if date == 20230424 then 6.916
    else if date == 20230501 then 7.522
    else if date == 20230508 then 6.252
    else if date == 20230515 then 5.8
    else if date == 20230522 then 6.4
    else if date == 20230530 then 8.566
    else if date == 20230605 then 6.837
    else if date == 20230612 then 8.447
    else if date == 20230620 then 6.915
    else if date == 20230626 then 7.297
    else if date == 20230703 then 6.359
    else if date == 20230710 then 6.826
    else if date == 20230717 then 7.224
    else if date == 20230724 then 8.722
    else if date == 20230731 then 7.338
    else if date == 20230807 then 8.704
    else if date == 20230814 then 8.072
    else if date == 20230821 then 8.754
    else if date == 20230828 then 7.841
    else if date == 20230905 then 5.965
    else if date == 20230911 then 7.336
else 0;

def rtxExpectedMove =
 if date == 20230313 then 3.028
    else if date == 20230320 then 3.346
    else if date == 20230327 then 2.702
    else if date == 20230403 then 1.762
    else if date == 20230410 then 2.251
    else if date == 20230417 then 1.967
    else if date == 20230424 then 3.232
    else if date == 20230501 then 2.035
    else if date == 20230508 then 2.292
    else if date == 20230515 then 2.096
    else if date == 20230522 then 2.124
    else if date == 20230530 then 2.253
    else if date == 20230605 then 1.876
    else if date == 20230612 then 2.139
    else if date == 20230620 then 2.314
    else if date == 20230626 then 1.963
    else if date == 20230703 then 1.552
    else if date == 20230710 then 1.886
    else if date == 20230717 then 2.005
    else if date == 20230724 then 3.149
    else if date == 20230731 then 1.942
    else if date == 20230807 then 1.781
    else if date == 20230814 then 1.959
    else if date == 20230821 then 1.739
    else if date == 20230828 then 1.577
    else if date == 20230905 then 1.296
else 0;

def sbuxExpectedMove =
 if date == 20230313 then 3.721
    else if date == 20230320 then 3.763
    else if date == 20230327 then 3.105
    else if date == 20230403 then 2.416
    else if date == 20230410 then 2.744
    else if date == 20230417 then 2.4
    else if date == 20230424 then 2.351
    else if date == 20230501 then 6.17
    else if date == 20230508 then 2.651
    else if date == 20230515 then 2.468
    else if date == 20230522 then 2.608
    else if date == 20230530 then 2.609
    else if date == 20230605 then 2.298
    else if date == 20230612 then 2.486
    else if date == 20230620 then 2.107
    else if date == 20230626 then 2.454
    else if date == 20230703 then 1.765
    else if date == 20230710 then 2.109
    else if date == 20230717 then 2.341
    else if date == 20230724 then 2.646
    else if date == 20230731 then 5.606
    else if date == 20230807 then 2.725
    else if date == 20230814 then 2.445
    else if date == 20230821 then 2.578
    else if date == 20230828 then 2.222
    else if date == 20230905 then 1.73
else 0;

def schwExpectedMove =
 if date == 20230313 then 8.846
    else if date == 20230320 then 6.433
    else if date == 20230327 then 4.467
    else if date == 20230403 then 2.65
    else if date == 20230410 then 2.618
    else if date == 20230417 then 4.912
    else if date == 20230424 then 2.006
    else if date == 20230501 then 2.194
    else if date == 20230508 then 2.758
    else if date == 20230515 then 2.333
    else if date == 20230522 then 2.293
    else if date == 20230530 then 2.089
    else if date == 20230605 then 1.85
    else if date == 20230612 then 2.262
    else if date == 20230620 then 1.607
    else if date == 20230626 then 1.81
    else if date == 20230703 then 1.649
    else if date == 20230710 then 1.725
    else if date == 20230717 then 2.858
    else if date == 20230724 then 2.102
    else if date == 20230731 then 1.781
    else if date == 20230807 then 1.878
    else if date == 20230814 then 1.987
    else if date == 20230821 then 2.017
    else if date == 20230828 then 2.03
    else if date == 20230905 then 1.507
else 0;

def slvExpectedMove =
 if date == 20230313 then 0.741
    else if date == 20230320 then 1.007
    else if date == 20230327 then 0.8
    else if date == 20230403 then 0.66
    else if date == 20230410 then 0.9
    else if date == 20230417 then 0.697
    else if date == 20230424 then 0.725
    else if date == 20230501 then 0.733
    else if date == 20230508 then 0.83
    else if date == 20230515 then 0.745
    else if date == 20230522 then 0.659
    else if date == 20230530 then 0.64
    else if date == 20230605 then 0.585
    else if date == 20230612 then 0.686
    else if date == 20230620 then 0.609
    else if date == 20230626 then 0.618
    else if date == 20230703 then 0.528
    else if date == 20230710 then 0.561
    else if date == 20230717 then 0.622
    else if date == 20230724 then 0.635
    else if date == 20230731 then 0.576
    else if date == 20230807 then 0.591
    else if date == 20230814 then 0.536
    else if date == 20230821 then 0.595
    else if date == 20230828 then 0.62
    else if date == 20230905 then 0.507
    else if date == 20230911 then 0.57
else 0;

def soExpectedMove =
 if date == 20230313 then 1.846
    else if date == 20230320 then 2.117
    else if date == 20230327 then 1.78
    else if date == 20230403 then 1.292
    else if date == 20230410 then 1.553
    else if date == 20230417 then 1.562
    else if date == 20230424 then 1.581
    else if date == 20230501 then 1.365
    else if date == 20230508 then 1.566
    else if date == 20230515 then 1.317
    else if date == 20230522 then 1.41
    else if date == 20230530 then 1.497
    else if date == 20230605 then 1.119
    else if date == 20230612 then 1.421
    else if date == 20230620 then 1.123
    else if date == 20230626 then 0.922
    else if date == 20230703 then 0.989
    else if date == 20230710 then 1.207
    else if date == 20230717 then 1.143
    else if date == 20230724 then 1.212
    else if date == 20230731 then 1.639
    else if date == 20230807 then 0.877
    else if date == 20230814 then 1.459
    else if date == 20230821 then 1.332
    else if date == 20230828 then 1.125
    else if date == 20230905 then 0.912
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
    else if date == 20230417 then 57.065
    else if date == 20230424 then 62.662
    else if date == 20230501 then 70.138
    else if date == 20230508 then 64.735
    else if date == 20230515 then 57.641
    else if date == 20230522 then 61.053
    else if date == 20230530 then 62.686
    else if date == 20230605 then 53.771
    else if date == 20230612 then 63.102
    else if date == 20230620 then 49.248
    else if date == 20230626 then 56.558
    else if date == 20230703 then 48.35
    else if date == 20230710 then 58.695
    else if date == 20230717 then 53.405
    else if date == 20230724 then 60.538
    else if date == 20230731 then 53.289
    else if date == 20230807 then 69.44
    else if date == 20230814 then 66.84
    else if date == 20230821 then 79.67
    else if date == 20230828 then 66.89
    else if date == 20230905 then 46.787
    else if date == 20230911 then 56.235
else 0;

def spyExpectedMove =
 if date == 20230313 then 11.86
    else if date == 20230320 then 12.026
    else if date == 20230327 then 9.147
    else if date == 20230403 then 6.253
    else if date == 20230410 then 7.615
    else if date == 20230417 then 5.904
    else if date == 20230424 then 6.244
    else if date == 20230501 then 7.218
    else if date == 20230508 then 6.864
    else if date == 20230515 then 6.404
    else if date == 20230522 then 6.405
    else if date == 20230530 then 8.05
    else if date == 20230605 then 5.573
    else if date == 20230612 then 7.116
    else if date == 20230620 then 5.235
    else if date == 20230626 then 5.561
    else if date == 20230703 then 5.348
    else if date == 20230710 then 5.931
    else if date == 20230717 then 5.668
    else if date == 20230724 then 6.198
    else if date == 20230731 then 5.377
    else if date == 20230807 then 7.841
    else if date == 20230814 then 6.617
    else if date == 20230821 then 8.006
    else if date == 20230828 then 6.761
    else if date == 20230905 then 4.803
    else if date == 20230911 then 6.179
else 0;

def tExpectedMove =
 if date == 20230313 then 0.589
    else if date == 20230320 then 0.649
    else if date == 20230327 then 0.52
    else if date == 20230403 then 0.487
    else if date == 20230410 then 0.498
    else if date == 20230417 then 0.969
    else if date == 20230424 then 0.509
    else if date == 20230501 then 0.447
    else if date == 20230508 then 0.396
    else if date == 20230515 then 0.383
    else if date == 20230522 then 0.474
    else if date == 20230530 then 0.459
    else if date == 20230605 then 0.519
    else if date == 20230612 then 0.487
    else if date == 20230620 then 0.395
    else if date == 20230626 then 0.406
    else if date == 20230703 then 0.497
    else if date == 20230710 then 0.379
    else if date == 20230717 then 0.475
    else if date == 20230724 then 0.926
    else if date == 20230731 then 0.42
    else if date == 20230807 then 0.425
    else if date == 20230814 then 0.412
    else if date == 20230821 then 0.404
    else if date == 20230828 then 0.348
    else if date == 20230905 then 0.367
else 0;

def tgtExpectedMove =
 if date == 20230313 then 6.448
    else if date == 20230320 then 6.916
    else if date == 20230327 then 5.535
    else if date == 20230403 then 4.485
    else if date == 20230410 then 5.441
    else if date == 20230417 then 4.499
    else if date == 20230424 then 4.283
    else if date == 20230501 then 4.657
    else if date == 20230508 then 4.521
    else if date == 20230515 then 12.399
    else if date == 20230522 then 4.858
    else if date == 20230530 then 5.207
    else if date == 20230605 then 4.448
    else if date == 20230612 then 4.997
    else if date == 20230620 then 4.469
    else if date == 20230626 then 4.111
    else if date == 20230703 then 3.477
    else if date == 20230710 then 3.838
    else if date == 20230717 then 3.772
    else if date == 20230724 then 3.903
    else if date == 20230731 then 3.686
    else if date == 20230807 then 3.712
    else if date == 20230814 then 10.045
    else if date == 20230821 then 4.137
    else if date == 20230828 then 3.281
    else if date == 20230905 then 2.659
else 0;

def tltExpectedMove =
 if date == 20230313 then 2.911
    else if date == 20230320 then 3.184
    else if date == 20230327 then 2.694
    else if date == 20230403 then 2.043
    else if date == 20230410 then 2.679
    else if date == 20230417 then 1.665
    else if date == 20230424 then 1.713
    else if date == 20230501 then 2.023
    else if date == 20230508 then 2.014
    else if date == 20230515 then 1.744
    else if date == 20230522 then 1.943
    else if date == 20230530 then 2.337
    else if date == 20230605 then 1.573
    else if date == 20230612 then 1.81
    else if date == 20230620 then 1.383
    else if date == 20230626 then 1.58
    else if date == 20230703 then 1.297
    else if date == 20230710 then 1.769
    else if date == 20230717 then 1.454
    else if date == 20230724 then 1.391
    else if date == 20230731 then 1.457
    else if date == 20230807 then 2.094
    else if date == 20230814 then 1.806
    else if date == 20230821 then 1.901
    else if date == 20230828 then 1.691
    else if date == 20230905 then 1.457
    else if date == 20230911 then 1.586
else 0;

def tmoExpectedMove =
 if date == 20230313 then 22.481
    else if date == 20230320 then 22.623
    else if date == 20230327 then 20.773
    else if date == 20230403 then 15.777
    else if date == 20230410 then 16.418
    else if date == 20230417 then 10.107
    else if date == 20230424 then 25.684
    else if date == 20230501 then 13.893
    else if date == 20230508 then 13.972
    else if date == 20230515 then 12.937
    else if date == 20230522 then 18.563
    else if date == 20230530 then 14.17
    else if date == 20230605 then 13.161
    else if date == 20230612 then 12.966
    else if date == 20230620 then 11.535
    else if date == 20230626 then 13.014
    else if date == 20230703 then 10.492
    else if date == 20230710 then 11.963
    else if date == 20230717 then 12.775
    else if date == 20230724 then 24.531
    else if date == 20230731 then 12.363
    else if date == 20230807 then 14.361
    else if date == 20230814 then 13.254
    else if date == 20230821 then 13.775
    else if date == 20230828 then 13.409
    else if date == 20230905 then 12.028
else 0;

def tmusExpectedMove =
 if date == 20230313 then 4.797
    else if date == 20230320 then 5.056
    else if date == 20230327 then 3.907
    else if date == 20230403 then 2.687
    else if date == 20230410 then 3.541
    else if date == 20230417 then 3.165
    else if date == 20230424 then 7.006
    else if date == 20230501 then 3.244
    else if date == 20230508 then 2.736
    else if date == 20230515 then 2.615
    else if date == 20230522 then 3.477
    else if date == 20230530 then 3.493
    else if date == 20230605 then 5.181
    else if date == 20230612 then 4.09
    else if date == 20230620 then 3.767
    else if date == 20230626 then 3.259
    else if date == 20230703 then 3.257
    else if date == 20230710 then 2.986
    else if date == 20230717 then 3.408
    else if date == 20230724 then 8.08
    else if date == 20230731 then 3.131
    else if date == 20230807 then 2.18
    else if date == 20230814 then 3.493
    else if date == 20230821 then 3.482
    else if date == 20230828 then 3.228
    else if date == 20230905 then 2.671
else 0;

def tslaExpectedMove =
 if date == 20230313 then 12.551
    else if date == 20230320 then 12.217
    else if date == 20230327 then 12.464
    else if date == 20230403 then 14.578
    else if date == 20230410 then 11.255
    else if date == 20230417 then 15.681
    else if date == 20230424 then 8.854
    else if date == 20230501 then 8.336
    else if date == 20230508 then 8.148
    else if date == 20230515 then 9.619
    else if date == 20230522 then 9.079
    else if date == 20230530 then 11.275
    else if date == 20230605 then 12.306
    else if date == 20230612 then 16.758
    else if date == 20230620 then 16.552
    else if date == 20230626 then 15.942
    else if date == 20230703 then 17.61
    else if date == 20230710 then 14.259
    else if date == 20230717 then 23.775
    else if date == 20230724 then 14.934
    else if date == 20230731 then 12.115
    else if date == 20230807 then 12.675
    else if date == 20230814 then 11.823
    else if date == 20230821 then 12.379
    else if date == 20230828 then 12.308
    else if date == 20230905 then 11.369
else 0;

def txnExpectedMove =
 if date == 20230313 then 6.821
    else if date == 20230320 then 7.157
    else if date == 20230327 then 5.925
    else if date == 20230403 then 4.42
    else if date == 20230410 then 5.256
    else if date == 20230417 then 4.083
    else if date == 20230424 then 8.039
    else if date == 20230501 then 4.766
    else if date == 20230508 then 4.054
    else if date == 20230515 then 3.968
    else if date == 20230522 then 4.392
    else if date == 20230530 then 5.447
    else if date == 20230605 then 4.366
    else if date == 20230612 then 4.679
    else if date == 20230620 then 4.228
    else if date == 20230626 then 3.991
    else if date == 20230703 then 3.594
    else if date == 20230710 then 4.212
    else if date == 20230717 then 4.468
    else if date == 20230724 then 8.366
    else if date == 20230731 then 4.489
    else if date == 20230807 then 4.663
    else if date == 20230814 then 4.445
    else if date == 20230821 then 5.012
    else if date == 20230828 then 4.271
    else if date == 20230905 then 3.483
else 0;

def unhExpectedMove =
 if date == 20230313 then 15.363
    else if date == 20230320 then 14.883
    else if date == 20230327 then 13.58
    else if date == 20230403 then 14.551
    else if date == 20230410 then 16.496
    else if date == 20230417 then 11.271
    else if date == 20230424 then 10.57
    else if date == 20230501 then 10.515
    else if date == 20230508 then 10.619
    else if date == 20230515 then 10.057
    else if date == 20230522 then 11.08
    else if date == 20230530 then 11.863
    else if date == 20230605 then 8.488
    else if date == 20230612 then 12.083
    else if date == 20230620 then 11.147
    else if date == 20230626 then 9.127
    else if date == 20230703 then 8.077
    else if date == 20230710 then 17.577
    else if date == 20230717 then 11.208
    else if date == 20230724 then 11.851
    else if date == 20230731 then 11.385
    else if date == 20230807 then 10.455
    else if date == 20230814 then 10.558
    else if date == 20230821 then 11.699
    else if date == 20230828 then 9.614
    else if date == 20230905 then 9.774
else 0;

def unpExpectedMove =
 if date == 20230313 then 7.243
    else if date == 20230320 then 8.943
    else if date == 20230327 then 6.435
    else if date == 20230403 then 4.558
    else if date == 20230410 then 5.186
    else if date == 20230417 then 6.646
    else if date == 20230424 then 4.585
    else if date == 20230501 then 4.818
    else if date == 20230508 then 5.236
    else if date == 20230515 then 5.147
    else if date == 20230522 then 5.057
    else if date == 20230530 then 5.335
    else if date == 20230605 then 4.878
    else if date == 20230612 then 5.419
    else if date == 20230620 then 4.748
    else if date == 20230626 then 5.252
    else if date == 20230703 then 3.673
    else if date == 20230710 then 4.342
    else if date == 20230717 then 4.27
    else if date == 20230724 then 7.858
    else if date == 20230731 then 4.542
    else if date == 20230807 then 5.828
    else if date == 20230814 then 4.725
    else if date == 20230821 then 4.856
    else if date == 20230828 then 4.193
    else if date == 20230905 then 3.353
else 0;

def upsExpectedMove =
 if date == 20230313 then 6.695
    else if date == 20230320 then 7.96
    else if date == 20230327 then 5.957
    else if date == 20230403 then 3.84
    else if date == 20230410 then 5.033
    else if date == 20230417 then 6.276
    else if date == 20230424 then 9.888
    else if date == 20230501 then 3.862
    else if date == 20230508 then 3.556
    else if date == 20230515 then 3.726
    else if date == 20230522 then 4.131
    else if date == 20230530 then 4.481
    else if date == 20230605 then 4.128
    else if date == 20230612 then 4.265
    else if date == 20230620 then 4.533
    else if date == 20230626 then 4.139
    else if date == 20230703 then 4.137
    else if date == 20230710 then 4.205
    else if date == 20230717 then 4.5
    else if date == 20230724 then 5.47
    else if date == 20230731 then 3.939
    else if date == 20230807 then 9.898
    else if date == 20230814 then 5.085
    else if date == 20230821 then 4.315
    else if date == 20230828 then 3.828
    else if date == 20230905 then 3.281
else 0;

def usbExpectedMove =
 if date == 20230313 then 2.519
    else if date == 20230320 then 3.34
    else if date == 20230327 then 2.529
    else if date == 20230403 then 1.294
    else if date == 20230410 then 1.618
    else if date == 20230417 then 2.304
    else if date == 20230424 then 1.743
    else if date == 20230501 then 2.287
    else if date == 20230508 then 2.498
    else if date == 20230515 then 2.015
    else if date == 20230522 then 1.626
    else if date == 20230530 then 1.476
    else if date == 20230605 then 1.508
    else if date == 20230612 then 1.447
    else if date == 20230620 then 1.269
    else if date == 20230626 then 1.287
    else if date == 20230703 then 0.998
    else if date == 20230710 then 1.076
    else if date == 20230717 then 2.039
    else if date == 20230724 then 1.233
    else if date == 20230731 then 1.174
    else if date == 20230807 then 1.286
    else if date == 20230814 then 1.247
    else if date == 20230821 then 1.378
    else if date == 20230828 then 1.191
    else if date == 20230905 then 0.845
else 0;

def vExpectedMove =
 if date == 20230313 then 7.75
    else if date == 20230320 then 8.209
    else if date == 20230327 then 6.471
    else if date == 20230403 then 4.329
    else if date == 20230410 then 5.329
    else if date == 20230417 then 4.35
    else if date == 20230424 then 8.657
    else if date == 20230501 then 4.38
    else if date == 20230508 then 4.829
    else if date == 20230515 then 4.393
    else if date == 20230522 then 5.01
    else if date == 20230530 then 4.841
    else if date == 20230605 then 4.661
    else if date == 20230612 then 5.243
    else if date == 20230620 then 4.071
    else if date == 20230626 then 4.139
    else if date == 20230703 then 3.708
    else if date == 20230710 then 4.48
    else if date == 20230717 then 4.196
    else if date == 20230724 then 8.497
    else if date == 20230731 then 4.056
    else if date == 20230807 then 5.017
    else if date == 20230814 then 4.971
    else if date == 20230821 then 5.397
    else if date == 20230828 then 4.824
    else if date == 20230905 then 3.698
else 0;

def vzExpectedMove =
 if date == 20230313 then 1.216
    else if date == 20230320 then 1.185
    else if date == 20230327 then 0.97
    else if date == 20230403 then 0.96
    else if date == 20230410 then 0.88
    else if date == 20230417 then 0.654
    else if date == 20230424 then 1.635
    else if date == 20230501 then 0.815
    else if date == 20230508 then 0.805
    else if date == 20230515 then 0.767
    else if date == 20230522 then 0.843
    else if date == 20230530 then 0.895
    else if date == 20230605 then 1.059
    else if date == 20230612 then 0.905
    else if date == 20230620 then 0.75
    else if date == 20230626 then 0.696
    else if date == 20230703 then 0.858
    else if date == 20230710 then 0.708
    else if date == 20230717 then 0.719
    else if date == 20230724 then 1.592
    else if date == 20230731 then 0.736
    else if date == 20230807 then 0.865
    else if date == 20230814 then 0.805
    else if date == 20230821 then 0.816
    else if date == 20230828 then 0.724
    else if date == 20230905 then 0.616
else 0;

def wbaExpectedMove =
 if date == 20230313 then 1.296
    else if date == 20230320 then 1.388
    else if date == 20230327 then 2.068
    else if date == 20230403 then 0.87
    else if date == 20230410 then 1.054
    else if date == 20230417 then 0.902
    else if date == 20230424 then 0.905
    else if date == 20230501 then 0.986
    else if date == 20230508 then 0.951
    else if date == 20230515 then 1.027
    else if date == 20230522 then 0.937
    else if date == 20230530 then 0.969
    else if date == 20230605 then 0.649
    else if date == 20230612 then 1.013
    else if date == 20230620 then 0.948
    else if date == 20230626 then 1.85
    else if date == 20230703 then 0.691
    else if date == 20230710 then 0.742
    else if date == 20230717 then 0.586
    else if date == 20230724 then 0.77
    else if date == 20230731 then 0.834
    else if date == 20230807 then 0.958
    else if date == 20230814 then 0.948
    else if date == 20230821 then 0.827
    else if date == 20230828 then 0.781
    else if date == 20230905 then 0.821
else 0;

def wfcExpectedMove =
 if date == 20230313 then 2.568
    else if date == 20230320 then 2.969
    else if date == 20230327 then 2.138
    else if date == 20230403 then 1.263
    else if date == 20230410 then 2.105
    else if date == 20230417 then 1.198
    else if date == 20230424 then 1.23
    else if date == 20230501 then 1.333
    else if date == 20230508 then 1.52
    else if date == 20230515 then 1.46
    else if date == 20230522 then 1.505
    else if date == 20230530 then 1.373
    else if date == 20230605 then 1.267
    else if date == 20230612 then 1.369
    else if date == 20230620 then 1.171
    else if date == 20230626 then 1.301
    else if date == 20230703 then 1.075
    else if date == 20230710 then 1.721
    else if date == 20230717 then 1.537
    else if date == 20230724 then 1.301
    else if date == 20230731 then 1.163
    else if date == 20230807 then 1.25
    else if date == 20230814 then 1.166
    else if date == 20230821 then 1.316
    else if date == 20230828 then 1.154
    else if date == 20230905 then 0.865
else 0;

def wmtExpectedMove =
 if date == 20230313 then 3.867
    else if date == 20230320 then 3.636
    else if date == 20230327 then 3.118
    else if date == 20230403 then 3.691
    else if date == 20230410 then 2.892
    else if date == 20230417 then 2.29
    else if date == 20230424 then 2.171
    else if date == 20230501 then 2.608
    else if date == 20230508 then 2.959
    else if date == 20230515 then 6.504
    else if date == 20230522 then 2.977
    else if date == 20230530 then 2.955
    else if date == 20230605 then 1.415
    else if date == 20230612 then 2.871
    else if date == 20230620 then 2.523
    else if date == 20230626 then 1.303
    else if date == 20230703 then 2.083
    else if date == 20230710 then 2.84
    else if date == 20230717 then 2.95
    else if date == 20230724 then 2.741
    else if date == 20230731 then 2.482
    else if date == 20230807 then 2.847
    else if date == 20230814 then 6.353
    else if date == 20230821 then 3.216
    else if date == 20230828 then 2.551
    else if date == 20230905 then 2.146
else 0;

def xhbExpectedMove =
 if date == 20230313 then 4.138
    else if date == 20230320 then 3.753
    else if date == 20230327 then 3.455
    else if date == 20230403 then 1.692
    else if date == 20230410 then 2.934
    else if date == 20230417 then 1.46
    else if date == 20230424 then 2.298
    else if date == 20230501 then 3.441
    else if date == 20230508 then 4.832
    else if date == 20230515 then 2.031
    else if date == 20230522 then 2.36
    else if date == 20230530 then 2.606
    else if date == 20230605 then 3.638
    else if date == 20230612 then 1.711
    else if date == 20230620 then 2.588
    else if date == 20230626 then 1.57
    else if date == 20230703 then 1.766
    else if date == 20230710 then 2.318
    else if date == 20230717 then 1.665
    else if date == 20230724 then 3.047
    else if date == 20230731 then 1.89
    else if date == 20230807 then 2.516
    else if date == 20230814 then 2.477
    else if date == 20230821 then 2.795
    else if date == 20230828 then 2.729
    else if date == 20230905 then 2.18
    else if date == 20230911 then 3.355
else 0;

def xlbExpectedMove =
 if date == 20230313 then 2.979
    else if date == 20230320 then 2.979
    else if date == 20230327 then 2.533
    else if date == 20230403 then 1.877
    else if date == 20230410 then 3.29
    else if date == 20230417 then 1.305
    else if date == 20230424 then 3.829
    else if date == 20230501 then 1.956
    else if date == 20230508 then 3.004
    else if date == 20230515 then 2.445
    else if date == 20230522 then 1.205
    else if date == 20230530 then 1.778
    else if date == 20230605 then 3.296
    else if date == 20230612 then 1.839
    else if date == 20230620 then 1.262
    else if date == 20230626 then 3.622
    else if date == 20230703 then 0.849
    else if date == 20230710 then 1.84
    else if date == 20230717 then 1.132
    else if date == 20230724 then 3.514
    else if date == 20230731 then 1.024
    else if date == 20230807 then 3.119
    else if date == 20230814 then 1.746
    else if date == 20230821 then 1.447
    else if date == 20230828 then 1.848
    else if date == 20230905 then 0.573
    else if date == 20230911 then 2.594
else 0;

def xlcExpectedMove =
 if date == 20230313 then 1.41
    else if date == 20230320 then 1.639
    else if date == 20230327 then 1.197
    else if date == 20230403 then 1.021
    else if date == 20230410 then 1.052
    else if date == 20230417 then 1.596
    else if date == 20230424 then 1.633
    else if date == 20230501 then 3.87
    else if date == 20230508 then 1.687
    else if date == 20230515 then 2.094
    else if date == 20230522 then 1.549
    else if date == 20230530 then 1.046
    else if date == 20230605 then 2.283
    else if date == 20230612 then 1.117
    else if date == 20230620 then 0.883
    else if date == 20230626 then 0.86
    else if date == 20230703 then 2.193
    else if date == 20230710 then 1.092
    else if date == 20230717 then 1.042
    else if date == 20230724 then 2.069
    else if date == 20230731 then 2.471
    else if date == 20230807 then 1.335
    else if date == 20230814 then 1.696
    else if date == 20230821 then 1.394
    else if date == 20230828 then 2.808
    else if date == 20230905 then 0.866
    else if date == 20230911 then 2.305
else 0;

def xleExpectedMove =
 if date == 20230313 then 3.352
    else if date == 20230320 then 3.884
    else if date == 20230327 then 3.175
    else if date == 20230403 then 2.203
    else if date == 20230410 then 2.673
    else if date == 20230417 then 2.115
    else if date == 20230424 then 2.324
    else if date == 20230501 then 2.321
    else if date == 20230508 then 2.118
    else if date == 20230515 then 2.343
    else if date == 20230522 then 2.257
    else if date == 20230530 then 2.39
    else if date == 20230605 then 2.796
    else if date == 20230612 then 2.381
    else if date == 20230620 then 2.098
    else if date == 20230626 then 1.999
    else if date == 20230703 then 1.572
    else if date == 20230710 then 1.865
    else if date == 20230717 then 1.564
    else if date == 20230724 then 2.01
    else if date == 20230731 then 1.946
    else if date == 20230807 then 1.857
    else if date == 20230814 then 2.14
    else if date == 20230821 then 2.36
    else if date == 20230828 then 2.146
    else if date == 20230905 then 1.673
    else if date == 20230911 then 1.735
else 0;

def xlfExpectedMove =
 if date == 20230313 then 1.783
    else if date == 20230320 then 1.879
    else if date == 20230327 then 1.268
    else if date == 20230403 then 0.751
    else if date == 20230410 then 0.918
    else if date == 20230417 then 0.768
    else if date == 20230424 then 0.674
    else if date == 20230501 then 0.727
    else if date == 20230508 then 0.75
    else if date == 20230515 then 0.703
    else if date == 20230522 then 0.678
    else if date == 20230530 then 0.66
    else if date == 20230605 then 0.563
    else if date == 20230612 then 0.66
    else if date == 20230620 then 0.543
    else if date == 20230626 then 0.685
    else if date == 20230703 then 0.452
    else if date == 20230710 then 0.583
    else if date == 20230717 then 0.601
    else if date == 20230724 then 0.603
    else if date == 20230731 then 0.549
    else if date == 20230807 then 0.611
    else if date == 20230814 then 0.628
    else if date == 20230821 then 0.68
    else if date == 20230828 then 0.573
    else if date == 20230905 then 0.46
    else if date == 20230911 then 0.433
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
    else if date == 20230417 then 3.08
    else if date == 20230424 then 3.245
    else if date == 20230501 then 3.545
    else if date == 20230508 then 2.959
    else if date == 20230515 then 2.931
    else if date == 20230522 then 2.979
    else if date == 20230530 then 4.247
    else if date == 20230605 then 3.293
    else if date == 20230612 then 4.051
    else if date == 20230620 then 3.603
    else if date == 20230626 then 3.287
    else if date == 20230703 then 2.755
    else if date == 20230710 then 3.211
    else if date == 20230717 then 2.972
    else if date == 20230724 then 4.479
    else if date == 20230731 then 3.652
    else if date == 20230807 then 3.791
    else if date == 20230814 then 3.829
    else if date == 20230821 then 5.032
    else if date == 20230828 then 3.721
    else if date == 20230905 then 2.849
    else if date == 20230911 then 3.436
else 0;

def xlpExpectedMove =
 if date == 20230313 then 1.563
    else if date == 20230320 then 1.931
    else if date == 20230327 then 1.454
    else if date == 20230403 then 0.93
    else if date == 20230410 then 0.873
    else if date == 20230417 then 0.749
    else if date == 20230424 then 0.892
    else if date == 20230501 then 1.113
    else if date == 20230508 then 0.444
    else if date == 20230515 then 1.121
    else if date == 20230522 then 1.081
    else if date == 20230530 then 0.976
    else if date == 20230605 then 0.726
    else if date == 20230612 then 0.984
    else if date == 20230620 then 0.921
    else if date == 20230626 then 0.946
    else if date == 20230703 then 1.133
    else if date == 20230710 then 0.638
    else if date == 20230717 then 0.621
    else if date == 20230724 then 0.866
    else if date == 20230731 then 0.743
    else if date == 20230807 then 1.028
    else if date == 20230814 then 0.98
    else if date == 20230821 then 1.091
    else if date == 20230828 then 0.871
    else if date == 20230905 then 0.793
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
    else if date == 20230417 then 1.376
    else if date == 20230424 then 1.117
    else if date == 20230501 then 1.364
    else if date == 20230508 then 0.866
    else if date == 20230515 then 1.05
    else if date == 20230522 then 1.286
    else if date == 20230530 then 1.351
    else if date == 20230605 then 1.136
    else if date == 20230612 then 1.245
    else if date == 20230620 then 1.028
    else if date == 20230626 then 1.26
    else if date == 20230703 then 0.984
    else if date == 20230710 then 1.07
    else if date == 20230717 then 1.057
    else if date == 20230724 then 1.384
    else if date == 20230731 then 1.123
    else if date == 20230807 then 1.077
    else if date == 20230814 then 1.118
    else if date == 20230821 then 2.35
    else if date == 20230828 then 1.6
    else if date == 20230905 then 0.845
    else if date == 20230911 then 0.768
else 0;

def xlvExpectedMove =
 if date == 20230313 then 3.207
    else if date == 20230320 then 3.897
    else if date == 20230327 then 2.559
    else if date == 20230403 then 1.768
    else if date == 20230410 then 2.153
    else if date == 20230417 then 1.549
    else if date == 20230424 then 1.887
    else if date == 20230501 then 1.9
    else if date == 20230508 then 1.802
    else if date == 20230515 then 1.829
    else if date == 20230522 then 1.646
    else if date == 20230530 then 2.021
    else if date == 20230605 then 2.77
    else if date == 20230612 then 1.781
    else if date == 20230620 then 1.478
    else if date == 20230626 then 1.505
    else if date == 20230703 then 1.107
    else if date == 20230710 then 1.765
    else if date == 20230717 then 1.22
    else if date == 20230724 then 2.821
    else if date == 20230731 then 1.943
    else if date == 20230807 then 2.034
    else if date == 20230814 then 1.856
    else if date == 20230821 then 2.344
    else if date == 20230828 then 2.921
    else if date == 20230905 then 1.497
    else if date == 20230911 then 1.782
else 0;

def xlyExpectedMove =
 if date == 20230313 then 3.89
    else if date == 20230320 then 3.961
    else if date == 20230327 then 4.437
    else if date == 20230403 then 3.787
    else if date == 20230410 then 3.762
    else if date == 20230417 then 6.418
    else if date == 20230424 then 3.584
    else if date == 20230501 then 4.092
    else if date == 20230508 then 2.908
    else if date == 20230515 then 2.96
    else if date == 20230522 then 3.63
    else if date == 20230530 then 3.951
    else if date == 20230605 then 2.228
    else if date == 20230612 then 3.17
    else if date == 20230620 then 2.18
    else if date == 20230626 then 3.484
    else if date == 20230703 then 2.13
    else if date == 20230710 then 2.707
    else if date == 20230717 then 3.44
    else if date == 20230724 then 4.318
    else if date == 20230731 then 4.708
    else if date == 20230807 then 4.955
    else if date == 20230814 then 4.077
    else if date == 20230821 then 3.951
    else if date == 20230828 then 3.739
    else if date == 20230905 then 2.46
    else if date == 20230911 then 2.859
else 0;

def xomExpectedMove =
 if date == 20230313 then 4.397
    else if date == 20230320 then 4.981
    else if date == 20230327 then 4.045
    else if date == 20230403 then 2.959
    else if date == 20230410 then 3.482
    else if date == 20230417 then 2.681
    else if date == 20230424 then 3.636
    else if date == 20230501 then 3.266
    else if date == 20230508 then 1.791
    else if date == 20230515 then 3.196
    else if date == 20230522 then 2.988
    else if date == 20230530 then 3.308
    else if date == 20230605 then 3.786
    else if date == 20230612 then 3.317
    else if date == 20230620 then 2.806
    else if date == 20230626 then 2.51
    else if date == 20230703 then 2.36
    else if date == 20230710 then 2.718
    else if date == 20230717 then 3.036
    else if date == 20230724 then 3.376
    else if date == 20230731 then 2.614
    else if date == 20230807 then 2.524
    else if date == 20230814 then 2.881
    else if date == 20230821 then 2.953
    else if date == 20230828 then 2.593
    else if date == 20230905 then 2.203
else 0;

def xrtExpectedMove =
 if date == 20230313 then 2.518
    else if date == 20230320 then 4.254
    else if date == 20230327 then 2.97
    else if date == 20230403 then 1.985
    else if date == 20230410 then 2.039
    else if date == 20230417 then 2.032
    else if date == 20230424 then 2.679
    else if date == 20230501 then 2.034
    else if date == 20230508 then 4.872
    else if date == 20230515 then 1.715
    else if date == 20230522 then 1.645
    else if date == 20230530 then 1.723
    else if date == 20230605 then 2.808
    else if date == 20230612 then 2.055
    else if date == 20230620 then 1.764
    else if date == 20230626 then 2.568
    else if date == 20230703 then 2.085
    else if date == 20230710 then 2.712
    else if date == 20230717 then 1.868
    else if date == 20230724 then 1.986
    else if date == 20230731 then 1.592
    else if date == 20230807 then 1.977
    else if date == 20230814 then 1.712
    else if date == 20230821 then 2.497
    else if date == 20230828 then 1.59
    else if date == 20230905 then 1.147
    else if date == 20230911 then 1.277
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
