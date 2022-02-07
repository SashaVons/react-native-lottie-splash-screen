import UIKit
import Foundation
import Lottie

@objc class Dynamic: NSObject {

  @objc func createAnimationView(rootView: UIView, lottieName: String) -> AnimationView {
    let animationView = AnimationView(name: lottieName)
    animationView.frame = rootView.frame;
    animationView.center = rootView.center;
    animationView.contentMode = .scaleAspectFill;
    animationView.backgroundColor = UIColor.white;
    return animationView;
  }

  @objc func play(animationView: AnimationView) {
    animationView.play(
      completion: { (success) in
        ReactNativeLottieSplashScreen.setAnimationFinished(true)
      }
    );
  }
}

