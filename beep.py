import os
import time
duration = 1  # seconds
freq = 440  # Hz

def beep(duration=1, freq=440):
    os.system('play -nq -t alsa synth {} sine {}'.format(duration, freq))