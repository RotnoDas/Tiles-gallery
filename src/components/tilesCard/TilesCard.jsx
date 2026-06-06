import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TilesCard = ({ tiles }) => {
    return (
        <div>
            <Card>
                <div>
                    <Image src={tiles.image} alt={tiles.title} width={300} height={300}></Image>
                </div>
            </Card>
        </div>
    );
};

export default TilesCard;