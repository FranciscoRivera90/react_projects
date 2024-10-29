import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing = {true} userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing = {false} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing = {true} userName="elonMusk" name="Elon Musk"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing = {false} userName="vxnder" name="Vanderhart"/>
        </section>
    )
}
