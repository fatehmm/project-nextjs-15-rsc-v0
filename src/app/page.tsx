import { ErrorCard } from '../components/error-card';
import { Shell } from '../components/shell';
import { unkey } from '../server/ratelimit';

export default async function Home() {
    const ratelimit = await unkey.limit('identifier');

    if (!ratelimit.success) {
        return (
            <Shell className="w-screen h-screen flex items-center justify-center mx-auto">
                <ErrorCard
                    title="Ratelimit Error"
                    description="You have been ratelimited. Please, try again later."
                />
            </Shell>
        );
    }
    return (
        <div>
            <div>
                <div>
                    <div>
                        {/* <ErrorCard
                            className="w-[300px]"
                            title="Ooops! Error!"
                            description="This is an error card!"
                        /> */}
                    </div>
                </div>
                <div>
                    <p>Request Limit: {ratelimit.limit}</p>
                </div>
                <div>Ratelimit success? {ratelimit.success ? 'Yes' : 'No'}</div>
            </div>
        </div>
    );
}
