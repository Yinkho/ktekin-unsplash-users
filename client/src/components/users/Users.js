import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getMostPopular, getMostActive } from '../../actions/users';
import { UserCard, UserCardContainer, MainContainer, Image } from './Users.styles';
import like from '../../assets/like.svg';
import camera from '../../assets/camera.svg';

const Users = ({ tabReducer, usersReducer, getUsers, getMostPopular, getMostActive, match }) => {

    useEffect(() => {
        getUsers()
        getMostPopular()
        getMostActive()
    }, [])

    const renderUsers = () => {
        switch (tabReducer.activeTab) {
            case '/':
                const { users } = usersReducer;
                return renderUserCards(users);
                break;

            case '/most-popular':
                const { mostPopular } = usersReducer;
                return renderUserCardsPopular(mostPopular);
                break;

            case '/most-active':
                const { mostActive } = usersReducer;
                return renderUserCardsActive(mostActive);
                break;
        
            default:
                break;
        }
    }

    const renderUserCards = usersArray => {
        return usersArray.map(user =>
            (
                <a key={user._id} href={user.links.html} style={{ textDecoration: 'none' }}>
                    <UserCard to={user.links.self}>
                        <Image src={user.profile_image.medium} alt={user.username} />
                        <p>{user.username}</p>
                    </UserCard>
                </a>
            )
        )
    }

    const renderUserCardsPopular = usersArray => {
        return usersArray.map(user =>
            (
                <a key={user._id} href={user.links.html} style={{ textDecoration: 'none' }}>
                    <UserCard to={user.links.self}>
                        <Image src={like} alt='like' icon />
                        <p style={{ color: '#91DBFC', fontWeight: '700' }}>{user.total_likes}</p>
                        <p>{user.username}</p>
                    </UserCard>
                </a>
            )
        )
    }

    const renderUserCardsActive = usersArray => {
        return usersArray.map(user =>
            (
                <a key={user._id} href={user.links.html} style={{ textDecoration: 'none' }}>
                    <UserCard to={user.links.self}>
                        <Image src={camera} alt='camera' icon />
                        <p style={{ color: '#8D8D8D', fontWeight: '700' }}>{user.total_photos} photos</p>
                        <p>{user.username}</p>
                    </UserCard>
                </a>
            )
        )
    }
    
    return (
        <MainContainer>
            <UserCardContainer>
                {renderUsers()}
            </UserCardContainer>
        </MainContainer>
    )
}

const mapStateToProps = state => ({
    usersReducer: state.usersReducer,
    tabReducer: state.tabReducer
});

export default connect(mapStateToProps, { getUsers, getMostPopular, getMostActive })(Users);