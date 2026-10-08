# Initial Unreal Engine Prototype - Hand Tracking

The below video is an initial prototype for the project created in Unreal Engine 5.1. As mentioned in an earlier post the current iteration of the project is using UE, BP, and MetaSounds to capture data and create direct connections with that data to parameters in a metasound source. The metasound is responsible for generating the soundscape and the mappings of the movements manipulate the parameters of that soundscape in real time.





<video controls>
  <source src="./media/71 - 2023-01-31_17-11-11.mp4" type="video/mp4">
</video>

![Watch Video](./media/71 - 2023-01-31_17-11-11.mp4)







This first prototype uses different tracking than what will be used in the final version of project. For the first tests I used the Ultraleap hand tracking module to get motion data. This is mainly due to the fact that I had not yet found a decent solution to the full-body tracking in UE yet. The Ultraleap also provides the added benefit of portability, so development is easier on the go, rather than needing a large space with lots of room for the full-body Kinect setup.



1. For this initial prototype example, the workflow steps are as follows:





Obtain the hand tracking data through the Ultraleap UE plugin and set up the data streaming inside of a Blueprint class.





This requires the tracking software and SDK to be installed as well.



The plugin provides quite a few Blueprints scripting nodes to use to access and 		control different form of hand tracing data from the device.

2. Create a MetaSound Source that generates the soundscape and provides the necessary input parameters that will be linked with blueprints.





I used a tutorial to create the wind generator. I am still very new to MetaSounds and am still learning all of the nodes and workflows used to create more complex sound and music generators.





The node-based approach is actually very user-friendly; it is just a matter of knowing which nodes do what and following the color-coded data flows to link objects together and generate sounds.





For this wind generator the primary nodes are a pink noise generator.

The tutorial can be found at this link. It is a video on Michael Gary Dean's YouTube channel. They have covered quite a few topics on procedural audio and DSP with MetaSounds.

https://www.youtube.com/watch?v=oZW1U882mh4


3. Link the input parameters of the MetaSound Source (MSS) node with the tracking data of the BP.





This is done inside the same blueprint node as the tracking.



Depending on the upper and lower bounds of the MSS node parameters it is likely that some manual value clamping and remapping will need to occur to get the desired results.

The hand tracking data mappings:





The Index-Thumb distal bone distance (pinch) = Whistle intensity.



Hand rotation X (Roll) = Low level noise decibel (dB) manipulation.



Hand rotation Y (Pitch) = Middle level noise decibel (dB) manipulation.



Hand rotation Z (Yaw) = High level noise decibel (dB) manipulation.