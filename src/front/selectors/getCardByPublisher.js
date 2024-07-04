import { ground } from '../js/data/ground';

export const getCardByPublisher = ( Side ) => {

    const validPublishers = ['Dark', 'Neutral', 'Light'];

    if ( !validPublishers.includes( Side ) ) {
        throw new Error(`Side "${ Side }" error`);
    }

    return ground.filter( card => card.Side === Side );

}