function tellStory(name, mood, activity) {
    let story = `This is a story about one person called ${name}. 
    ${name} is often ${mood}. When ${name} is ${mood}, ${name} likes to ${activity}. 
     ${name} is not always ${mood}, but ${name} still likes to ${activity}.`;
    alert(story);
    return story
}
tellStory("Jana", "happy", "sing")