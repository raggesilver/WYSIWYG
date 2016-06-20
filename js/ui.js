var $ = require('jquery');

// Set images

var darkMode = false;

$(function(){
  // Normal mone
  if(!darkMode) setNormalMode();
  else setDarkMode();

  function setNormalMode(){
    $("#openBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACaUlEQVRoQ+2Z/zVkMRTHP1MBOrAVoAJUsKsCVIAKmArYCna3AlSAClABKkAFnO+cd3PyMuG8zIs3yaz8NWdOkvf95t5v7o+MWJAxWhAefBMpzZJmkVPgF7CaAPARGAN/E9Z82VQROQMOenxhA7jrsT7LUhF5BpaBVEAnwDEgy2jtSxZEM24iIm/N2lmEL0usAb+BwxkxZFnWl8g6cJsFSfdN5AHSpfTpRl8i2miv0dlSdyxZZoqI3HsychDJgiphE/MCWeZHzUSEfUrXNVrk/yWiGKErVTGm1OFusI9cy4JdqQRCXOOPiDw0eVdqtB+auLvBYkTkSkpbXgt3Kx2awxojsgVcATeAfpc8HNYYEdNHK3IWysZhjRG5AH4C+6XUGp8conKuXWGNEVESKBGVLnTxc1hjRPqk9UN7oMMaEqlS6LqUQiJKyf8A/5r0fOgTTvleC2tIxOr3o6bGSNl46LktrCGRa2AT2Ab0u+TRwhoSMfGszLuZ0OEErWkyweoTUbWlHOspsb/V4ZvZp6j/1sLqE9kBzoHLplmX/esZN1QzsYXVJ6KURDVIVamJNSB8IrKEUhNZRmlKycPSKIfVJ6JqS74nreh3ycPqJYfVJ2LAZ+k4Dk360y6KwFRVg/j1UmiRufdwO5hWDRE9g7SwhkSqqkH8eikkUl1q4gvbhKP/qhS6ATci901l2MFN5zbF2j9TWMOAqNBf8phKTWKuVWVqEiNSrdBDjVRXg/gakEb0Gqtns9LbPyb0aL0kIn3f2Ye+HKJatrih1qNC/9APmimHoKa6Dt09gIaulbJZsXNriOSdDm9hiLwDEwalUhYBlNEAAAAASUVORK5CYII=");
    $("#saveBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACqklEQVRoQ+2ajTEDQRTH/6kAFaACVIAOqAAVGBWgAjogFZAKUAEqQAWkAuaf2b152ezt5yXvknEzmUkut7vvt+9zd2+AFbkGK8IBF+QGwBGArR4AvgE4BPCTIosEuQVwntJogc8kw0iQbwDrAPYAsAP3+jU35mmOdowNAM8AdowsUc1IoWKCxv7vQlFyDE5qMowGyCuAXUH9CODY/HYnKxlGA8QKKzVo5fBpPQlGE4Rju4K3mW8UZllAqL0gzDKBBGGWDcQHw3Qxldlj4TX2f2r4lf2k+ojbN82Mea9hWEaNWKipSfgHSbWjQKmTmkfahlLXCMuOfSHdyFTcvJXrhwemjFFx9pAyc0GavjR8pAaE6ySumagJrlOo3Qt+zwFhw7UK30ht+tWysDs1EAy98qJc2zkgnIV7AJupEhU8RwgKzJmWF+/dBfob5oAUyNVJEwnBwMAJdS0jy7Q6kSqzEwkxNNriWoYakzDjPmvEB2HnwYUZ9RUkBGFhHkz+GdPc+giSAkHH53O8zhiEckAY9uy+lxsCM01/5nFr/0UQ7C0HhKH3pFZiT/tqiFyQ2L5XDWOpJtiOE5ylkeI6KEJYA0FfmVhVjmnNA6QUgrKrl/FWQTUQvQGphegFSBcQ6iBdQaiCsGp9Mg5ic4cb0GYydiDiqTm7PUh6MaV4CkSTJzxAaiDyOGFSHwnhfJqwZth2sKQCwrX2hzOrFqbNnGJ5SwWkbanKBRJ9p6liBWwvQWIFp2tqM1GpxkdKN5h9gYZm5R55v5slK4/e3M0GH0hQnlCt1SUIT4ntQQ2F5uczUkzGxlfxkZISv5c+slAQu5Oo+cKABA5phLsozEvNrqT0kSsAlyVTp9jmGgDlnnmphjcZ8+e5LdoFNzXBkD6B8IF0MYhKH/N8QWahQH8dBR2xdBPprgAAAABJRU5ErkJggg==");
    $("#pdfBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACEklEQVRoQ+2a8TEEMRSHf1cBKqADVIAKUAEqQAWUQAdUQAeoAB1QASpgvplkJrOzu3ebZPclZjNz/9wmm/fl997LS+4W6m6/Pc9SH71JOpD0nfoiP35hBMK0WWFWAenrE7OgodLZYCxB3iVt51LGEmRD0nMuGEsQ5l7PBWMNQoxlgSkBJAtMKSDJMCWBJMGUBhINUyJIFEypIINhSgYZBGMJElOnUZvttg2sDQSGVpstQGKUYIyvmmeQ3OeR6hTZknQi6cVVuLEAfpyJawHx6ipbDDmW9JhIYgJyLelK0qekTafKfs0guNVezSBHkh4CBQCqUhFOfV8ByK2kixpdC5vvXNaqOtgxPnQvbkxSbxVNslYT5N+4FmDc9XKPFdvMFCHYCXrUOJf04UrwWBczAfHxwbXojlOC/aR518uzNUn0WwZoAvLk9o0zl72al3AY3dxXyHL072qTg2AgIJQnKHPojO7aEH+cKgBcSrrpIJkchGIRl2HVUSJs7PB8D1xb8wq2PZsMBKMJagpG31CFqpdsFVa/gNIPlYgR2r2kU0vX8gCUIF4BADAUv8/VRlWElSUeQhfKUSBO6lrNw5OfPHXjmzxr+cNTOHGOUmRyEJ9m/cTLgjU1VkaNEWD4kJVS6qhVIEcFWcWAXH1mkN4VyLXMA94zKzIrMsBdhnSdXWvM/2sNUaLZN/r3kZRJxxjbCvIHqtLMM7Ef9LMAAAAASUVORK5CYII=");
    $("#printBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABxElEQVRoQ+2YYVEEMQyFv1MADgAH4AAJSAAFSOBQAA5ACg4ABdwpAAcw2enO7JTbS9rNlu3R/m2a5L0kTdMVtvVtE5tNaqVpVgWCgoMDYgWuEWjd7wlU7aoCUUSs8lZHNbkGZIwhMzMaxYn7ZrvWVDErTHRUEzfbbUA0Kp32W0RasTulUqympVb1qfUAXAGnM6XIXGo3wDNwL33kEbidy1IhvR2QT+AYuADeChn2MnMOvAIbAWK+GbysO+vp/G9AnFnV1F0CT0HoBngZHKgqIh+DG1VuqrNagXwBR8H5bdQmqoqIpJb0C1nXNafWvhqqKiINiHYdLmn/f6bWkr9MkyJycECs30deNWR50GZFpAHJDFGLSMrnw/BFmkn4r2Myocqk2q8iEZHn9IkXgqDnHZDxtSgQZww71RWJyOKA9EPLvl+UXcx41EhcEzE5WkT6X5St9IU1cGekd9hHPGokrokxIJp73b+WLAEjk5dWvH/VEMeAyNgrk+Pa6pgWYo2x3H2z3SlAPGokBpjTRzodU4B41EgMJKePTAaSmy4p54qkVopDubINyBhzZmZyqR85Z7abWuzOfprVqX6qAsHUkmf2zsUfSpWO3QauGZUAAAAASUVORK5CYII=");

    $("#boldBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADFElEQVRoQ+2Zj5EMQRSHfxcBIiADRIAIEAEiQASIABEggiMCRIAIkAERUF/Ve/Ttbb9+PdU727e1XbU1czc93f31+9tvTnQg7eRAOHQEmU2SGYlck/RS0uWBi/8hid8vSV8lfbP7xVNkQJ4YyOJJki++l8TvXbL/mW4ZkOeSntkEb5dMsuUdpHvDpMz1VtEHSd03SaWn6wF5IQmoXTTA7tn4V03NnkpKb9wsIOXmsPgH9o+bWcnMCALDK0mPDQKYZpsVBFXDm6Fm2AtOIGyjQD5Kut2azJ5jzJ8kYXPc15pL5bUkPOcqIH9aE1WePwoMmo1hgz5nNmmURBwkMx7uFu9317wTNlCTTHrczMQeRyL3m56wkIx7p0h10uPuEySjOgcBQo73XdLvTJ63T4kQyU8DY34o6c3Mxu5m4i6bVARXu9laz8/0X1siJIeoDA6EK2rDlXS+bC6N2vNz1KNBesLJT0sUieDbIPhfFGd2IhGPwi0Qghu772ePUhJ+gMN2uiDoPEoiLYDWcyC+FN4plV+Vg84CwppQseu2OCI9TqCZLDrMTCCsifSFBNHPI0R/7KTZRoGgGqTc2dYqNhD1kcYlSyqbMKNAiMDA9DRUCSdRKzYgHdJ9YO7YfXX8USCeE+GVMq0sNkTq4xUcgIBZDSSzMb4Ygh4SYcejzBrDR23D83tm4l2l8QB5Bkw8uVLZbo9RYRVn3yCl263ZgSeXHywT2Mo7AwjeidNiLQhmzi3DInv6ALRlO/2kWMurLgwIqQmutqZaFwLEFxml61ODUIDDLvBI3EceKVXfGm3sBK5W80q89yOyE1NqzbOGMCMeBeJBqwVRPicLwNCjiru7Xg5hYQo0CmRzlyMg/0rVgmZMpMG1dq7/N8YokNaiep+zeIoPeLNVS6a9C43646UoA6FKpPv8vVmcOPf+TBLBi5HtelU/DQFVD0jLMJdIhUWjPlz9qzExBZfb9ZmvB2TJQnvewTMBwIY1VWlz4AwIupr+KNmzcis4cFL0X+fr/7tnQBYPvuaLR5A1dzsz11EimV1as89fCTH3M0C2y2IAAAAASUVORK5CYII=");
    $("#italicBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACEklEQVRoQ+2Z4TEEQRCFv4sAESACRIAIEAEiQASIABEgAkSACBABIkAEVFftVE2p3r2t2n5dW1fXf+yPq7Nf97x58+YmzEhNZoSDOcjYJpk1kWNgx4H/AA4jmpIF8tvxshvA61CYDJB14AX4BA6aF14E7prnkHcI+ZIp3bRldQHcViBbwCPwDNjz4MoAuQH2gRPgsnnjM+AUuAIMdHBlgNj6XwO2gafmje3vJrAH3A+mgBQfKUKvm/YNLACrgO1cg0s9kaKFN8BEb7UCvAM/gIk+pNQgnhZ2mx0rTOjWCTWIrX8zQjM9E72VCf4IOAcMNKTUILb+l4Ha9MKFrp6Irf+vpt11w4r4lwATfUgpJ+JpoXZ5E31YKUGK0Gst2BHlGngADDSslCCeForLhwpdrRHP9DyXD5mKaiJtpue5/KhBPC14Lh8CoVxanul5x/nRgxSh1yfe4vL1cX70IJ7peS4/ahDP9NpcftQgXUIPPfHWXVBsvynR9v8oFSBd0bY+zoctK9X2mxJt1RNJi7ZqEM/0JNFWDZIWbdUgadFWCTIt2obdYXnbXeT2693nyqKtciLeHZYs2ipBUqOtEiQ12qpApkXb0Dsspdg905NGW9VE0qOtCqQI3Y4o5YdNe7ZJSaKtCqTrV9s6t4ce3RXBysKUd5drO1no1WhbJyKdXdbtPl88B+nTpczPzCeS2e0+/+sPNg2VM8IOtsYAAAAASUVORK5CYII=");
    $("#underlineBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACrklEQVRoQ+2ZgXFNQRSGv1RAB6gAFYQKUEGoABWEChIVoAJUECpABVJCVMB87Jm5uXnent23DLE7k8m7c/eec/7//P/uffv2uCRj75LgYAL52zo5O/KvduQjcGtV/FvgwWBAJ8CdnjxZaX37RcHZ57N4u/NkC4kEMX99nS20Nq87zwRSqM0SUetE3J8dyTLazVS2FWVed54JZHpku9amtKZHpkemR7YzMD0yPTI9Mj1yjoHuV4f59vuTgfRX6v9u+f0E3ARuA35eXzcqaON0j5s8dvpcjp7W11tzZDvyHtgH7gJ+9kzrHvAIeDUCBfAQeAm8A+6X8y3PuT5sOOu6kDILxGIPgKfAMfAEOAJelwJGYFnneAYcAi9KviEdkaE3RVLK6zrwpUS+AZzuiGRTvDjd9DRTBQwBYpAz4AoQhQeDI45OJUmyosMB7CtwtQbC+1lpOTcKXybT9ILbxSshU4vW4HZ3nauKpQWIzJjEwsP0ITkT9YB5XDzn8yEhD7E1ucDsjEqojhYgBgsD2gnBmCRWG+8rMxeEmmcs0MVCIpYkSJYg7Mzzkq8KolVaETD2EJdhwTgsSDnYrZCh990TnO+wOPciGRe8Q9b9HGaOnxViL0mB6AWylJjFKgk7I8t2zGU6M/Sa8+2eMTW8IJskFYlapRXPya4g7ICMKyevHQKKDc3PdsEhyxYdG2rIz+KVmTEF4XV0MUPIjzm9QHxWFi0qClVa6rrmjyhOkG54ITOBCiJl7jXCXYBELOXhEhr+kE1B+V+Glx5xjsXasfgpzzm+LRine4wAEt2xGAsMQLWiBKDJJaGrC8sEo4AsYwrGP6Wj/JYesWA7FD6pgU3f/x1A0slHTpxARrI5IlZLR3xtV/d/cugnvzZURwsQ94dr1YhjJ6RfVVqAjC1xcLTvxNLYM1ycqNIAAAAASUVORK5CYII=");

    $("#jlBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAxUlEQVRoQ+2ZUQqAMAxD9f6HVhAEUZAtJWsI8XvtmryWTd03k2c30bFFiBrJJ5FDrbjBei4NlkIGDdBclmFX4xIiIUJyIK1FMhZOq3QglrrDUgiMVSGwhFNBwF1DhCjReF/j1WqbqietNWXXgsWWRPLOvqBz/rb4fHxorqe2veWM1Cxpjg6RZgCf7UMkREgOWL7qdl9RSvNaCiZ1CZQ2QiDbiEEhQjQXSh0ikG3EIEsi3Qciyiv/2VHnqHGWM0J1jJ3chsgJ1OoKMxb8xfQAAAAASUVORK5CYII=");
    $("#jcBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAyklEQVRoQ+2YSwqAMAxE2/sfWkFcCC46HUgawnOd38yrljhHk2c20TEQUo3kl8hVbThxnkdDSyGiATXDeNmrcYEIRIIc4GgFGWuXVYmcvvWXcy4DXovaCLGRZyWqRLLmsfsgxLYuKBEiQcbaZSFiWxeU2HLVPX17u6x+Px/cQiXyeNlLYPgMARGIBDnA0Qoy1i6rEjl9WS7nXAaws9uHxEtUiXjVE7MQkmi21Aoikk2JQRBJNFtqxc4u2ZQTxM6e4/NmF75am4aFh99k6gozkSthuAAAAABJRU5ErkJggg==");
    $("#jrBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAxklEQVRoQ+2ZQQrAIAwE9f+PbqEnoRfZTFCW7blZzIwSS+cweaZJHyON3GZyNfLctrjN9Xw9WDayCeDO13LYb/MSIzHSRCBbqwmsHEsYOX0j+E12lYZNIyoAtI7YWuiC1LA0opLrqouRLrJqboyo5LrqLD91T09oVRZ2RVEXgNblsKM4gbAYASCiETGC4gTCYmSBeHqQYgPRphFgh9cjckbqDNmEGGF51tNipM6QTbA0cnqwqYryn10l11pneUZaiXWH2xh5AfTbCjPs91NoAAAAAElFTkSuQmCC");
    $("#jfBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAtElEQVRoQ+2YwQrAMAhD2///6A12KuwSpEoIb2erJk/ptr1Cnh2iYyHEjeRJ5HFrTuzn0xApRDTAM4xld+MCEYg0OcBoNRlbTht5Ica8opSxOhxk2R0onD1ABCJNDjBaTcaW03Kzl627f/D38+F+icGMLPug2VIpiEg2DQZBZNBsqVQkkZhP3Rgh0iy6BkXuiKvZUl8QkWwaDILIoNlSqUgiMRdijBBpFl2DInfE1WyprxgiL9QKCjP+U42kAAAAAElFTkSuQmCC");

    $("#menuBtnImg").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAoklEQVRoQ+2XwQnAMBDDkv2HbmlHEBiMUf82OekC6T0j3x2Z4zhIm0mNaCREwNUKgcW1n5EHp4uCU4MUceVH8bJzdpmkRjJceatGOLtMUiMZrrxVI5xdJqmRDFfeOvX6nfkf4T6Lkl72Ihn/UTSikRABVysEFtdqBKMLBTUSAotrp4zMvH5nBsF72RScuiNNYPFZNILRhYIaCYHFtRrB6ELBF6iBBi2uabeWAAAAAElFTkSuQmCC");
  }

  function setDarkMode(){
    $("#openBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACaUlEQVRoQ+2Z/zVkMRTHP1MBOrAVoAJUsKsCVIAKmArYCna3AlSAClABKkAFnO+cd3PyMuG8zIs3yaz8NWdOkvf95t5v7o+MWJAxWhAefBMpzZJmkVPgF7CaAPARGAN/E9Z82VQROQMOenxhA7jrsT7LUhF5BpaBVEAnwDEgy2jtSxZEM24iIm/N2lmEL0usAb+BwxkxZFnWl8g6cJsFSfdN5AHSpfTpRl8i2miv0dlSdyxZZoqI3HsychDJgiphE/MCWeZHzUSEfUrXNVrk/yWiGKErVTGm1OFusI9cy4JdqQRCXOOPiDw0eVdqtB+auLvBYkTkSkpbXgt3Kx2awxojsgVcATeAfpc8HNYYEdNHK3IWysZhjRG5AH4C+6XUGp8conKuXWGNEVESKBGVLnTxc1hjRPqk9UN7oMMaEqlS6LqUQiJKyf8A/5r0fOgTTvleC2tIxOr3o6bGSNl46LktrCGRa2AT2Ab0u+TRwhoSMfGszLuZ0OEErWkyweoTUbWlHOspsb/V4ZvZp6j/1sLqE9kBzoHLplmX/esZN1QzsYXVJ6KURDVIVamJNSB8IrKEUhNZRmlKycPSKIfVJ6JqS74nreh3ycPqJYfVJ2LAZ+k4Dk360y6KwFRVg/j1UmiRufdwO5hWDRE9g7SwhkSqqkH8eikkUl1q4gvbhKP/qhS6ATci901l2MFN5zbF2j9TWMOAqNBf8phKTWKuVWVqEiNSrdBDjVRXg/gakEb0Gqtns9LbPyb0aL0kIn3f2Ye+HKJatrih1qNC/9APmimHoKa6Dt09gIaulbJZsXNriOSdDm9hiLwDEwalUhYBlNEAAAAASUVORK5CYII=");
    $("#saveBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACqklEQVRoQ+2ajTEDQRTH/6kAFaACVIAOqAAVGBWgAjogFZAKUAEqQAWkAuaf2b152ezt5yXvknEzmUkut7vvt+9zd2+AFbkGK8IBF+QGwBGArR4AvgE4BPCTIosEuQVwntJogc8kw0iQbwDrAPYAsAP3+jU35mmOdowNAM8AdowsUc1IoWKCxv7vQlFyDE5qMowGyCuAXUH9CODY/HYnKxlGA8QKKzVo5fBpPQlGE4Rju4K3mW8UZllAqL0gzDKBBGGWDcQHw3Qxldlj4TX2f2r4lf2k+ojbN82Mea9hWEaNWKipSfgHSbWjQKmTmkfahlLXCMuOfSHdyFTcvJXrhwemjFFx9pAyc0GavjR8pAaE6ySumagJrlOo3Qt+zwFhw7UK30ht+tWysDs1EAy98qJc2zkgnIV7AJupEhU8RwgKzJmWF+/dBfob5oAUyNVJEwnBwMAJdS0jy7Q6kSqzEwkxNNriWoYakzDjPmvEB2HnwYUZ9RUkBGFhHkz+GdPc+giSAkHH53O8zhiEckAY9uy+lxsCM01/5nFr/0UQ7C0HhKH3pFZiT/tqiFyQ2L5XDWOpJtiOE5ylkeI6KEJYA0FfmVhVjmnNA6QUgrKrl/FWQTUQvQGphegFSBcQ6iBdQaiCsGp9Mg5ic4cb0GYydiDiqTm7PUh6MaV4CkSTJzxAaiDyOGFSHwnhfJqwZth2sKQCwrX2hzOrFqbNnGJ5SwWkbanKBRJ9p6liBWwvQWIFp2tqM1GpxkdKN5h9gYZm5R55v5slK4/e3M0GH0hQnlCt1SUIT4ntQQ2F5uczUkzGxlfxkZISv5c+slAQu5Oo+cKABA5phLsozEvNrqT0kSsAlyVTp9jmGgDlnnmphjcZ8+e5LdoFNzXBkD6B8IF0MYhKH/N8QWahQH8dBR2xdBPprgAAAABJRU5ErkJggg==");
    $("#pdfBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACEklEQVRoQ+2a8TEEMRSHf1cBKqADVIAKUAEqQAWUQAdUQAeoAB1QASpgvplkJrOzu3ebZPclZjNz/9wmm/fl997LS+4W6m6/Pc9SH71JOpD0nfoiP35hBMK0WWFWAenrE7OgodLZYCxB3iVt51LGEmRD0nMuGEsQ5l7PBWMNQoxlgSkBJAtMKSDJMCWBJMGUBhINUyJIFEypIINhSgYZBGMJElOnUZvttg2sDQSGVpstQGKUYIyvmmeQ3OeR6hTZknQi6cVVuLEAfpyJawHx6ipbDDmW9JhIYgJyLelK0qekTafKfs0guNVezSBHkh4CBQCqUhFOfV8ByK2kixpdC5vvXNaqOtgxPnQvbkxSbxVNslYT5N+4FmDc9XKPFdvMFCHYCXrUOJf04UrwWBczAfHxwbXojlOC/aR518uzNUn0WwZoAvLk9o0zl72al3AY3dxXyHL072qTg2AgIJQnKHPojO7aEH+cKgBcSrrpIJkchGIRl2HVUSJs7PB8D1xb8wq2PZsMBKMJagpG31CFqpdsFVa/gNIPlYgR2r2kU0vX8gCUIF4BADAUv8/VRlWElSUeQhfKUSBO6lrNw5OfPHXjmzxr+cNTOHGOUmRyEJ9m/cTLgjU1VkaNEWD4kJVS6qhVIEcFWcWAXH1mkN4VyLXMA94zKzIrMsBdhnSdXWvM/2sNUaLZN/r3kZRJxxjbCvIHqtLMM7Ef9LMAAAAASUVORK5CYII=");
    $("#printBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABxElEQVRoQ+2YYVEEMQyFv1MADgAH4AAJSAAFSOBQAA5ACg4ABdwpAAcw2enO7JTbS9rNlu3R/m2a5L0kTdMVtvVtE5tNaqVpVgWCgoMDYgWuEWjd7wlU7aoCUUSs8lZHNbkGZIwhMzMaxYn7ZrvWVDErTHRUEzfbbUA0Kp32W0RasTulUqympVb1qfUAXAGnM6XIXGo3wDNwL33kEbidy1IhvR2QT+AYuADeChn2MnMOvAIbAWK+GbysO+vp/G9AnFnV1F0CT0HoBngZHKgqIh+DG1VuqrNagXwBR8H5bdQmqoqIpJb0C1nXNafWvhqqKiINiHYdLmn/f6bWkr9MkyJycECs30deNWR50GZFpAHJDFGLSMrnw/BFmkn4r2Myocqk2q8iEZHn9IkXgqDnHZDxtSgQZww71RWJyOKA9EPLvl+UXcx41EhcEzE5WkT6X5St9IU1cGekd9hHPGokrokxIJp73b+WLAEjk5dWvH/VEMeAyNgrk+Pa6pgWYo2x3H2z3SlAPGokBpjTRzodU4B41EgMJKePTAaSmy4p54qkVopDubINyBhzZmZyqR85Z7abWuzOfprVqX6qAsHUkmf2zsUfSpWO3QauGZUAAAAASUVORK5CYII=");

    $("#boldBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADFElEQVRoQ+2Zj5EMQRSHfxcBIiADRIAIEAEiQASIABEggiMCRIAIkAERUF/Ve/Ttbb9+PdU727e1XbU1czc93f31+9tvTnQg7eRAOHQEmU2SGYlck/RS0uWBi/8hid8vSV8lfbP7xVNkQJ4YyOJJki++l8TvXbL/mW4ZkOeSntkEb5dMsuUdpHvDpMz1VtEHSd03SaWn6wF5IQmoXTTA7tn4V03NnkpKb9wsIOXmsPgH9o+bWcnMCALDK0mPDQKYZpsVBFXDm6Fm2AtOIGyjQD5Kut2azJ5jzJ8kYXPc15pL5bUkPOcqIH9aE1WePwoMmo1hgz5nNmmURBwkMx7uFu9317wTNlCTTHrczMQeRyL3m56wkIx7p0h10uPuEySjOgcBQo73XdLvTJ63T4kQyU8DY34o6c3Mxu5m4i6bVARXu9laz8/0X1siJIeoDA6EK2rDlXS+bC6N2vNz1KNBesLJT0sUieDbIPhfFGd2IhGPwi0Qghu772ePUhJ+gMN2uiDoPEoiLYDWcyC+FN4plV+Vg84CwppQseu2OCI9TqCZLDrMTCCsifSFBNHPI0R/7KTZRoGgGqTc2dYqNhD1kcYlSyqbMKNAiMDA9DRUCSdRKzYgHdJ9YO7YfXX8USCeE+GVMq0sNkTq4xUcgIBZDSSzMb4Ygh4SYcejzBrDR23D83tm4l2l8QB5Bkw8uVLZbo9RYRVn3yCl263ZgSeXHywT2Mo7AwjeidNiLQhmzi3DInv6ALRlO/2kWMurLgwIqQmutqZaFwLEFxml61ODUIDDLvBI3EceKVXfGm3sBK5W80q89yOyE1NqzbOGMCMeBeJBqwVRPicLwNCjiru7Xg5hYQo0CmRzlyMg/0rVgmZMpMG1dq7/N8YokNaiep+zeIoPeLNVS6a9C43646UoA6FKpPv8vVmcOPf+TBLBi5HtelU/DQFVD0jLMJdIhUWjPlz9qzExBZfb9ZmvB2TJQnvewTMBwIY1VWlz4AwIupr+KNmzcis4cFL0X+fr/7tnQBYPvuaLR5A1dzsz11EimV1as89fCTH3M0C2y2IAAAAASUVORK5CYII=");
    $("#italicBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACEklEQVRoQ+2Z4TEEQRCFv4sAESACRIAIEAEiQASIABEgAkSACBABIkAEVFftVE2p3r2t2n5dW1fXf+yPq7Nf97x58+YmzEhNZoSDOcjYJpk1kWNgx4H/AA4jmpIF8tvxshvA61CYDJB14AX4BA6aF14E7prnkHcI+ZIp3bRldQHcViBbwCPwDNjz4MoAuQH2gRPgsnnjM+AUuAIMdHBlgNj6XwO2gafmje3vJrAH3A+mgBQfKUKvm/YNLACrgO1cg0s9kaKFN8BEb7UCvAM/gIk+pNQgnhZ2mx0rTOjWCTWIrX8zQjM9E72VCf4IOAcMNKTUILb+l4Ha9MKFrp6Irf+vpt11w4r4lwATfUgpJ+JpoXZ5E31YKUGK0Gst2BHlGngADDSslCCeForLhwpdrRHP9DyXD5mKaiJtpue5/KhBPC14Lh8CoVxanul5x/nRgxSh1yfe4vL1cX70IJ7peS4/ahDP9NpcftQgXUIPPfHWXVBsvynR9v8oFSBd0bY+zoctK9X2mxJt1RNJi7ZqEM/0JNFWDZIWbdUgadFWCTIt2obdYXnbXeT2693nyqKtciLeHZYs2ipBUqOtEiQ12qpApkXb0Dsspdg905NGW9VE0qOtCqQI3Y4o5YdNe7ZJSaKtCqTrV9s6t4ce3RXBysKUd5drO1no1WhbJyKdXdbtPl88B+nTpczPzCeS2e0+/+sPNg2VM8IOtsYAAAAASUVORK5CYII=");
    $("#underlineBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACrklEQVRoQ+2ZgXFNQRSGv1RAB6gAFYQKUEGoABWEChIVoAJUECpABVJCVMB87Jm5uXnent23DLE7k8m7c/eec/7//P/uffv2uCRj75LgYAL52zo5O/KvduQjcGtV/FvgwWBAJ8CdnjxZaX37RcHZ57N4u/NkC4kEMX99nS20Nq87zwRSqM0SUetE3J8dyTLazVS2FWVed54JZHpku9amtKZHpkemR7YzMD0yPTI9Mj1yjoHuV4f59vuTgfRX6v9u+f0E3ARuA35eXzcqaON0j5s8dvpcjp7W11tzZDvyHtgH7gJ+9kzrHvAIeDUCBfAQeAm8A+6X8y3PuT5sOOu6kDILxGIPgKfAMfAEOAJelwJGYFnneAYcAi9KviEdkaE3RVLK6zrwpUS+AZzuiGRTvDjd9DRTBQwBYpAz4AoQhQeDI45OJUmyosMB7CtwtQbC+1lpOTcKXybT9ILbxSshU4vW4HZ3nauKpQWIzJjEwsP0ITkT9YB5XDzn8yEhD7E1ucDsjEqojhYgBgsD2gnBmCRWG+8rMxeEmmcs0MVCIpYkSJYg7Mzzkq8KolVaETD2EJdhwTgsSDnYrZCh990TnO+wOPciGRe8Q9b9HGaOnxViL0mB6AWylJjFKgk7I8t2zGU6M/Sa8+2eMTW8IJskFYlapRXPya4g7ICMKyevHQKKDc3PdsEhyxYdG2rIz+KVmTEF4XV0MUPIjzm9QHxWFi0qClVa6rrmjyhOkG54ITOBCiJl7jXCXYBELOXhEhr+kE1B+V+Glx5xjsXasfgpzzm+LRine4wAEt2xGAsMQLWiBKDJJaGrC8sEo4AsYwrGP6Wj/JYesWA7FD6pgU3f/x1A0slHTpxARrI5IlZLR3xtV/d/cugnvzZURwsQ94dr1YhjJ6RfVVqAjC1xcLTvxNLYM1ycqNIAAAAASUVORK5CYII=");

    $("#jlBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAxUlEQVRoQ+2ZUQqAMAxD9f6HVhAEUZAtJWsI8XvtmryWTd03k2c30bFFiBrJJ5FDrbjBei4NlkIGDdBclmFX4xIiIUJyIK1FMhZOq3QglrrDUgiMVSGwhFNBwF1DhCjReF/j1WqbqietNWXXgsWWRPLOvqBz/rb4fHxorqe2veWM1Cxpjg6RZgCf7UMkREgOWL7qdl9RSvNaCiZ1CZQ2QiDbiEEhQjQXSh0ikG3EIEsi3Qciyiv/2VHnqHGWM0J1jJ3chsgJ1OoKMxb8xfQAAAAASUVORK5CYII=");
    $("#jcBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAyklEQVRoQ+2YSwqAMAxE2/sfWkFcCC46HUgawnOd38yrljhHk2c20TEQUo3kl8hVbThxnkdDSyGiATXDeNmrcYEIRIIc4GgFGWuXVYmcvvWXcy4DXovaCLGRZyWqRLLmsfsgxLYuKBEiQcbaZSFiWxeU2HLVPX17u6x+Px/cQiXyeNlLYPgMARGIBDnA0Qoy1i6rEjl9WS7nXAaws9uHxEtUiXjVE7MQkmi21Aoikk2JQRBJNFtqxc4u2ZQTxM6e4/NmF75am4aFh99k6gozkSthuAAAAABJRU5ErkJggg==");
    $("#jrBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAxklEQVRoQ+2ZQQrAIAwE9f+PbqEnoRfZTFCW7blZzIwSS+cweaZJHyON3GZyNfLctrjN9Xw9WDayCeDO13LYb/MSIzHSRCBbqwmsHEsYOX0j+E12lYZNIyoAtI7YWuiC1LA0opLrqouRLrJqboyo5LrqLD91T09oVRZ2RVEXgNblsKM4gbAYASCiETGC4gTCYmSBeHqQYgPRphFgh9cjckbqDNmEGGF51tNipM6QTbA0cnqwqYryn10l11pneUZaiXWH2xh5AfTbCjPs91NoAAAAAElFTkSuQmCC");
    $("#jfBtnImg").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAtElEQVRoQ+2YwQrAMAhD2///6A12KuwSpEoIb2erJk/ptr1Cnh2iYyHEjeRJ5HFrTuzn0xApRDTAM4xld+MCEYg0OcBoNRlbTht5Ica8opSxOhxk2R0onD1ABCJNDjBaTcaW03Kzl627f/D38+F+icGMLPug2VIpiEg2DQZBZNBsqVQkkZhP3Rgh0iy6BkXuiKvZUl8QkWwaDILIoNlSqUgiMRdijBBpFl2DInfE1WyprxgiL9QKCjP+U42kAAAAAElFTkSuQmCC");

    $("#menuBtnImg").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAApUlEQVRoQ+2XwQnAMAwD4/2HdqEjSAiMuP4l4jsH0nkl35TM8RjkmkmMYCREgNUKgZVrZ3dXTh8K9gxyCKp1FC67hS8QxkgAqlWJEQtfIIyRAFSrEiMWvkAYIwGoVmXP67fmf8TyeSjMZT8k4z8KRjASIsBqhcDKtRiR0YWCGAmBlWt7jNS8fmsGkZfyWLDnjhwDKx8HIzK6UBAjIbByLUZkdKHgB5RLGBsxuwzhAAAAAElFTkSuQmCC");
  }
});
