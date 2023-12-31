import { useClassNames } from '../../hooks';
import styles from './Home.module.scss';
import { Hero } from '~/components/Hero';
import { EmailCapture } from '~/components/EmailCapture';
import { Subscribe } from '~/components/Subscribe';
import { Feature } from '~/components/Feature';
import { Status } from '~/components/Status';
import { Service } from '~/components/Service';
import { FeatureSupport } from '~/components/FeatureSupport';

const HomePage = () => {
    const cx = useClassNames(styles);

    return (
        <>
            {/* Hero */}
            <Hero className={cx('hero')} />

            {/* Email capture */}
            <EmailCapture className={cx('email-capture')} />

            {/* Returning subscribers */}
            <Subscribe className={cx('subscribe')} />

            {/* Feature */}
            <Feature className={cx('feature')} />

            {/* Status */}
            <Status className={cx('status')} />

            {/* WorkProcess - Service */}
            <Service className={cx('service')} />

            {/* featureSupport */}
            <FeatureSupport className={cx('featureSupport')} />
        </>
    );
};

export default HomePage;
