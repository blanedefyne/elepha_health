import React, {
    useRef, useState, useEffect, useCallback, FunctionComponent, useMemo,
} from 'react';
import {View, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {Audio} from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Sound} from 'expo-av/src/Audio/Sound';
import {BigText} from 'shared/ui/Text/BigText';
import {HLSPlayerComponent} from 'shared/ui/LottieHLSPlayer/types';
import {formatTime} from 'shared/ui/LottieHLSPlayer/lib';

const relaxLottie = require('shared/ui/assets/bubble.json');
const balanceLottie = require('shared/ui/assets/bubble_or.json');
const activationLottie = require('shared/ui/assets/bubble_gr.json');

export const LottieHLSPlayer: FunctionComponent<HLSPlayerComponent> = (props) => {
    const animationRef = useRef<LottieView>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [sound, setSound] = useState<Sound | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);

    const playPause = useCallback(async () => {
        if (animationRef.current && sound) {
            if (isPlaying) {
                animationRef.current.pause();
                await sound.pauseAsync();
            } else {
                animationRef.current.play();
                await sound.playAsync();
            }
            setIsPlaying((prev) => !prev);
        }
    }, [animationRef.current, setIsPlaying, sound]);

    const lottieSize = props.windowHeight * 0.23;

    const animationSource = useMemo(
        () => {
            if (props.lottieType === 'relax') {
                return relaxLottie;
            } else if (props.lottieType === 'balance') {
                return balanceLottie;
            } else if (props.lottieType === 'activation') {
                return activationLottie;
            } else {
                return relaxLottie;
            }
        }, [props.lottieType]
    );
    // require();

    useEffect(() => {
        setCurrentTime(0);

        const loadAudio = async () => {
            try {
                if (sound) {
                    await sound.unloadAsync();
                }

                const {sound: newSound} = await Audio.Sound.createAsync(
                    {uri: props.audioSrc}, // 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'},
                    {shouldPlay: false},
                );

                setSound(newSound as Sound);
            } catch (error) {
                console.error('Error loading audio:', error);
            }
        };

        loadAudio();

        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    useEffect(() => {
        const updateCurrentTime = setInterval(async () => {
            if (isPlaying && sound) {
                const status = await sound.getStatusAsync();
                setCurrentTime(status.positionMillis);
            }
        }, 100);

        return () => {
            clearInterval(updateCurrentTime);
        };
    }, [isPlaying, sound]);

    useEffect(() => {
        if (animationRef.current && sound) {
            animationRef.current.pause();
            sound.pauseAsync();
            setIsPlaying(false);
        }
    }, []);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >

            <TouchableOpacity
                onPress={playPause}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: lottieSize,
                    height: lottieSize,
                }}
            >
                {/*<LottieView*/}
                {/*    ref={animationRef}*/}
                {/*    source={animationSource}*/}
                {/*    style={{*/}
                {/*        width: lottieSize,*/}
                {/*        height: lottieSize,*/}
                {/*        position: 'absolute',*/}
                {/*        opacity: 0.7,*/}
                {/*    }}*/}
                {/*    loop*/}
                {/*/>*/}

                <Icon
                    name={isPlaying ? 'pause' : 'play'}
                    size={30}
                    color="white"
                    style={{position: 'absolute'}}
                />

            </TouchableOpacity>

            <BigText>
                {formatTime(currentTime)}
            </BigText>

        </View>
    );
};
